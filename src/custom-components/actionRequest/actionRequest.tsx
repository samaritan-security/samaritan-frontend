import React from "react";
import { Button, Popover, Modal, Input } from "antd";
import { Person } from "../../api/api-types";

const { confirm } = Modal;

interface IActionRequestProps {
  id: string;
  ip: string;
}

interface IActionRequestState {
  name: string;
  person: Person;
  visible: boolean;
  modalVisible: boolean;
}

class ActionRequest extends React.Component<
  IActionRequestProps,
  IActionRequestState
> {
  state = {
    name: "",
    visible: false,
    modalVisible: false,
    person: new Person(""),
  };

  // componentDidMount = () => {
  //     const {id} = this.props;
  //     new PersonHandler().getById(id).then((person) => {
  //         this.setState({
  //             person: person
  //         })
  //     })
  // }

  handleShowActions = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  showConfirmAuthorize(e: React.MouseEvent) {
    const { visible } = this.state;
    //const {person} = this.state;
    confirm({
      title: `Do you want to authorize ?`,
      //icon: <ExclamationCircleOutlined />,
      content: "",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
    this.setState({
      visible: !visible,
    });
  }

  showConfirmUnathorize(e: React.MouseEvent) {
    const { visible } = this.state;
    //const {person} = this.state;
    confirm({
      title: `Do you want to unauthorize ?`,
      //icon: <ExclamationCircleOutlined />,
      content: "",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
    this.setState({
      visible: !visible,
    });
  }

  showRecognizeModal = () => {
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  };

  updateName = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  render() {
    const content = (
      <div style={{ display: "block" }}>
        <div style={{ margin: 2 }}>
          <Button
            type="primary"
            size="small"
            onClick={this.showRecognizeModal}
            block
            ghost
          >
            {" "}
            Recognize
          </Button>
        </div>
        <Modal
          title="Recognize"
          visible={this.state.modalVisible}
          onOk={this.showRecognizeModal}
          onCancel={this.showRecognizeModal}
        >
          <p>Name:</p>
          <Input onChange={this.updateName} />
        </Modal>
        <div style={{ margin: 2 }}>
          <Button
            type="primary"
            size="small"
            onClick={(e) => this.showConfirmAuthorize(e)}
            block
            ghost
          >
            {" "}
            Authorize
          </Button>
        </div>
        <div style={{ margin: 2 }}>
          <Button
            type="danger"
            size="small"
            onClick={(e) => this.showConfirmUnathorize(e)}
            block
            ghost
          >
            {" "}
            Unauthorize{" "}
          </Button>
        </div>
      </div>
    );
    return (
      <>
        <Popover
          title="Actions"
          content={content}
          placement="top"
          visible={this.state.visible}
        >
          <Button
            shape="circle"
            icon="ellipsis"
            onClick={this.handleShowActions}
          />
        </Popover>
      </>
    );
  }
}

export default ActionRequest;
