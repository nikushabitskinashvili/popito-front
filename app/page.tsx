'use client';
import React from "react";
import styles from "./page.module.css";
import Modal from "./components/modal/modal";
import Button from "./components/Button/Button";
import { useModal } from "./hooks/useModal";

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal(); 

  return (
    <div className={styles.page}>
      <Button openModal={openModal} />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
