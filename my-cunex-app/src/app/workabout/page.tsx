"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Share } from 'react-feather';
import styles from '@/styles/FreelancerProfile.module.css';

export default function FreelancerProfile() {
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Freelancer Profile | CUNEX</title>
        <meta name="description" content="Freelancer profile on CUNEX" />
      </Head>
      
      <div className={styles.header}>
        <div className={styles.statusBar}>
          <span className={styles.time}>14:40</span>
          <div className={styles.icons}>
            <span className={styles.signal}>●●●●</span>
            <span className={styles.wifi}>●●●</span>
            <span className={styles.battery}>●●●</span>
          </div>
        </div>
        
        <div className={styles.navBar}>
          <div className={styles.backButton}>
            <ChevronLeft color="#E75A87" size={24} />
            <div className={styles.logo}>
              <span className={styles.logoTextCU}>CU</span>
              <span className={styles.logoTextNEX}>NEX</span>
            </div>
          </div>
          <h1 className={styles.title}>Logo Design</h1>
          <button className={styles.shareButton}>
            <Share size={20} />
          </button>
        </div>
      </div>
      
      <div className={styles.portfolioSlider}>
        <button className={styles.sliderButton}>
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.portfolioItem}>
          <div className={styles.logoExample}>
            <Image 
              src="/bird-logo.png" 
              alt="Colorful bird logo" 
              width={200} 
              height={200}
              priority
            />
            <div className={styles.logoTitle}>LOREM IPSUM</div>
          </div>
        </div>
        
        <button className={styles.sliderButton}>
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tab} ${activeTab === 'detail' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('detail')}
        >
          Detail
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'about' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'feedback' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('feedback')}
        >
          Feedback
        </button>
      </div>
      
      {activeTab === 'about' && (
        <div className={styles.aboutContent}>
          <div className={styles.viewProfile}>
            <span>View Full Profile</span>
          </div>
          
          <div className={styles.profileHeader}>
            <div className={styles.profilePicContainer}>
              <div className={styles.profilePic}>
                {/* Placeholder for profile pic */}
                <span>120x120</span>
              </div>
            </div>
            <div className={styles.profileInfo}>
              <h2 className={styles.name}>Maria Schmidt</h2>
              <p className={styles.education}>3rd Year, Design & Technology</p>
              <div className={styles.rating}>
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
                <span className={styles.ratingValue}>(4.9)</span>
              </div>
            </div>
          </div>
          
          <div className={styles.statsContainer}>
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <div className={styles.statIcon}>✓</div>
                <div className={styles.statLabel}>Success Rate</div>
                <div className={styles.statValue}>98%</div>
              </div>
              
              <div className={styles.statBox}>
                <div className={styles.statIcon}>👤</div>
                <div className={styles.statLabel}>Jobs Sold</div>
                <div className={styles.statValue}>156</div>
              </div>
            </div>
            
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <div className={styles.statIcon}>↻</div>
                <div className={styles.statLabel}>Rehired</div>
                <div className={styles.statValue}>42 times</div>
              </div>
              
              <div className={styles.statBox}>
                <div className={styles.statIcon}>⏱</div>
                <div className={styles.statLabel}>Avg. Response</div>
                <div className={styles.statValue}>2 hours</div>
              </div>
            </div>
          </div>
          
          <div className={styles.bioSection}>
            <h3 className={styles.bioTitle}>Bio</h3>
            <p className={styles.bioText}>
              Passionate interaction designer with a focus on creating user-centric digital experiences. 
              I believe in design that not only looks great but also solves real-world problems.
            </p>
          </div>
          
          <button className={styles.requestButton}>
            Request Design
          </button>
          
          <div className={styles.chatButton}>
            <span className={styles.chatIcon}>💬</span>
          </div>
        </div>
      )}
    </div>
  );
}
