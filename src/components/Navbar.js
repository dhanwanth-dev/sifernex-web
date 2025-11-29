// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const navItems = ['Home', 'Services', 'Contact'];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(15, 15, 25, 0.96)',
        backdropFilter: 'blur(20px)',
        padding: '28px 6%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(109, 40, 217, 0.3)',
      }}
    >
      {/* CLICK TO RELOAD HOME */}
      <motion.div
        className="navbar-logo"
        whileHover={{ scale: 1.05 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #A78BFA, #ECBDFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = "/"}
      >
        SIFERNEX AI
      </motion.div>

      <div className="navbar-links" style={{ display: 'flex', gap: '60px' }}>
        {navItems.map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <Link key={item} to={path} style={{ textDecoration: 'none', position: 'relative' }}>
              <motion.div
                className="navbar-item"
                whileHover={{
                  scale: 1.12,
                  textShadow: '0 0 18px rgba(167, 139, 250, 0.9)',
                }}
                style={{
                  color: isActive ? '#ECBDFF' : '#E2D9FF',
                  fontSize: '1.6rem',
                  fontWeight: '600',
                }}
              >
                {item}

                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="active-glow"
                    style={{
                      position: 'absolute',
                      bottom: '-10px',
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #A78BFA, #6D28D9)',
                      borderRadius: '2px',
                      boxShadow: '0 0 30px rgba(167, 139, 250, 0.9)',
                    }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
