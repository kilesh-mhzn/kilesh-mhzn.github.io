import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext'
import './style.css'

function ThemeToggle() {
  const {isLightMode, toggleLightMode} = useContext(ThemeContext)

  return (
    <div class="toggleWrapper">
      <input checked={isLightMode}
          onChange={toggleLightMode} type="checkbox" class="dn" id="dn" />
      <label for="dn" class="toggle">
          <span class="toggle__handler">
              <span class="crater crater--1"></span>
              <span class="crater crater--2"></span>
              <span class="crater crater--3"></span>
          </span>
          <span class="star star--1"></span>
          <span class="star star--2"></span>
          <span class="star star--3"></span>
          <span class="star star--4"></span>
          <span class="star star--5"></span>
          <span class="star star--6"></span>
      </label>
  </div>
  );
}

export default ThemeToggle