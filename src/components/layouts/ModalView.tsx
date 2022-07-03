import { FC, ReactNode, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDevice from "../../hooks/useDevice";
import CloseSvg from "../../svg/CloseSvg";

Modal.setAppElement("#root");

interface ModalViewInterface {
  children: ReactNode;
}

const Header = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  cursor: pointer;
`;

const ModalView: FC<ModalViewInterface> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const closeModal = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  const device = useDevice();

  const getModalPosition = () => {
    if (device === "desktop") {
      return {
        top: "10px",
        left: "35%",
        right: "35%",
        bottom: "10px",
      };
    }
    if (device === "laptopL") {
      return {
        top: "10px",
        left: "20%",
        right: "20%",
        bottom: "10px",
      };
    }
    if (device === "laptop") {
      return {
        top: "10px",
        left: "10%",
        right: "10%",
        bottom: "10px",
      };
    }

    return {
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
    };
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(29, 28, 28, 0.75)",
        },
        content: {
          position: "absolute",
          ...getModalPosition(),
          border: "1px solid #ccc",
          background: "rgb(29, 28, 28)",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <Header>
        <CloseSvg onClick={closeModal} />
      </Header>
      {children}
    </Modal>
  );
};

export default ModalView;
