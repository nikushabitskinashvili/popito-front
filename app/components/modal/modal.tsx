'use client';

import React, { useState } from 'react';
import styles from './modal.module.scss';
import Image from 'next/image';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function Modal({ isModalOpen, closeModal }: ModalProps) {
  if (!isModalOpen) return null;

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setSelectedAnswer(prev => (prev === value ? null : value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.heading}>Let's choose a movie together for today</span>
          <div className={styles.x} onClick={closeModal}>
            <Image src="/icons/x.svg" alt="Close" width={10} height={10} />
          </div>
        </div>
        <div className={styles.content}>
          <span className={styles.question}>
            “Who are you planning to watch the movie with today?”
          </span>
          <div className={styles.innerWrapper}>
            <div className={styles.answers}>
              <label className={styles.label}>
                <input 
                  type="radio" 
                  checked={selectedAnswer === 'option1'} 
                  onChange={() => handleRadioChange('option1')} 
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
              <label className={styles.label}>
                <input 
                  type="radio" 
                  checked={selectedAnswer === 'option2'} 
                  onChange={() => handleRadioChange('option2')} 
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
              <label className={styles.label}>
                <input 
                  type="radio" 
                  checked={selectedAnswer === 'option3'} 
                  onChange={() => handleRadioChange('option3')} 
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
              <label className={styles.label}>
                <input 
                  type="radio" 
                  checked={selectedAnswer === 'option4'} 
                  onChange={() => handleRadioChange('option4')} 
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
            </div>
            <div className={styles.nextButton}>
              <span>Next</span>
            </div>
          </div>
        </div>
        <span className={styles.skip}>skip</span>
      </div>
    </div>
  );
}
