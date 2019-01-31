import React from "react";
import ModalButton from "react-modalbutton";
import "react-modalbutton/dist/index.css";

function ModalButtonExample() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
      ModalButton
      <ModalButton
        renderButton={buttonProps => (
          <button type="button" className="btn btn-primary" {...buttonProps}>
            Show modal
          </button>
        )}
        modalTitle="Modal title"
        renderContent={modalProps => (
          <React.Fragment>
            <div className="modal-body">Any content allowed</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={modalProps.hide}
              >
                Close
              </button>
            </div>
          </React.Fragment>
        )}
      />
    </div>
  );
}

export default ModalButtonExample;
