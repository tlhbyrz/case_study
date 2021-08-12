import React from 'react'
import "./ConfirmModal.css"

const confirmModal = ({show}) => {
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
                    <button>Evet</button>
                    <button>Hayır</button>
                </div>
            </div>
        </div>
    )
}

export default confirmModal
