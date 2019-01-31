import * as React from "react";

import { Dialog } from "@reach/dialog";

import "./styles.scss";

export type ShowFunc = () => void;
export type HideFunc = () => void;

export interface RenderModalContentProps {
  show: ShowFunc;
  hide: HideFunc;
}

export interface RenderModalButtonProps extends RenderModalContentProps {
  onClick: ShowFunc;
}

export type RenderButtonFunc = (
  modalButtonProps: RenderModalButtonProps
) => JSX.Element;

export type RenderContentFunc = (
  modalProps: RenderModalContentProps
) => JSX.Element;

export interface ModalButtonProps {
  renderButton: RenderButtonFunc;
  modalTitle: string;
  renderContent: RenderContentFunc;
}

export interface ModalButtonState {
  showDialog: boolean;
}

class ModalButton extends React.Component<ModalButtonProps, ModalButtonState> {
  constructor(props) {
    super(props);

    this.state = { showDialog: false };

    // Bind functions
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ showDialog: true });
  }

  hide() {
    this.setState({ showDialog: false });
  }

  render() {
    const modalProps = {
      show: this.show,
      hide: this.hide
    };

    const { renderButton, modalTitle, renderContent } = this.props;
    const { showDialog } = this.state;

    return (
      <React.Fragment>
        {renderButton({ ...modalProps, onClick: this.show })}
        {showDialog && (
          <Dialog className="modal-dialog" onDismiss={this.hide}>
            <div className="modal fade show d-block">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{modalTitle}</h5>
                    <button
                      type="button"
                      className="close"
                      onClick={this.hide}
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {renderContent(modalProps)}
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </React.Fragment>
    );
  }
}

export default ModalButton;
