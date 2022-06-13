import React, { useContext } from "react";
import { ModalProvider } from "../../context/ModalProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CarModel from "../CarModel/CarModel";

const CustomModal = () => {
  const { showModal, setModal } = useContext(ModalProvider);

  return (
    <Dialog open={showModal} onClose={() => setModal(false)}>
      <DialogTitle>
        <DialogActions>
          Nie wypożyczaj kota w worku! Objerzyj auto!
          <Button onClick={() => setModal(false)}>X</Button>
        </DialogActions>
      </DialogTitle>
      <DialogContent>
        <Canvas style={{ height: "500px" }}>
          <PerspectiveCamera makeDefault position={[3, 3, -5]} />
          <ambientLight intensity={1} />
          <pointLight position={[0, 10, 0]} />
          <pointLight position={[0, 10, -10]} />
          <pointLight position={[0, 10, 10]} />
          <pointLight position={[10, 5, 0]} />
          <pointLight position={[-10, 5, 0]} />
          <CarModel />
          <OrbitControls />
        </Canvas>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
