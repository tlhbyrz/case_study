import React from 'react'
import "./ConfirmModal.css"
import { useDispatch } from "react-redux";
import { deleteItemFrombasket } from '../../store/actions/basketActions';
import toast from 'react-hot-toast';


const ConfirmModal = ({show, removeItem, setShowModal, productId}) => {
    const dispatch = useDispatch();
    function removeItem(){
        toast.promise(dispatch(deleteItemFrombasket(productId)), 
            {
                success: `Ürün sepetten kaldırıldı!`,
                error: 'Hata oluştu. Lütfen daha sonra tekrar deneyiniz!',
            },
            {
                success: {
                    duration: 1750,
                },
                error: {
                    duration: 2500,
                }
            });
        setShowModal(false);
    }

    return (
        <div className={`modal ${show && "modal-active"}`}>
            <div className="modal-header">
                <h4>Ürünü silmek istediğinize emin misiniz?</h4>
            </div>
            <div className="modal-content">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
                </p>
                <div className="modal-actions">
                    <button onClick={() => removeItem()}>Evet</button>
                    <button onClick={() => setShowModal(false)}>Hayır</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
