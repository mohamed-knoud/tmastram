import React from 'react'
import './Menu.css'
import Tooltip from './Tooltip';
import { useState } from 'react';
import {Link } from 'react-router-dom';

function Menu() {
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);
    const [clicked7, setClicked7] = useState(false);
    const [clicked8, setClicked8] = useState(false);
    const [clicked9, setClicked9] = useState(false);

    const handleClick1 = () => {
        setClicked1(true);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(false);
        setClicked9(false);

      };
      const handleClick2 = () => {
        setClicked1(false);
        setClicked2(true);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(false);
        setClicked9(false);      };

      const handleClick3 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(true);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(false);
        setClicked9(false);      };
      const handleClick4 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(true);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(false);
        setClicked9(false);      };
      const handleClick5 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(true);
        setClicked6(false);
        setClicked7(false);
        setClicked8(false);
        setClicked9(false);      };
      const handleClick6 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(true);
        setClicked7(false);
        setClicked8(false);
        setClicked9(false);      };
      const handleClick7 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(true);
        setClicked8(false);
        setClicked9(false);      };
      const handleClick8 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(true);
        setClicked9(false);      };
      const handleClick9 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(false);
        setClicked9(true);      };
  return (
    <div id="container">
        <div id="menu">
        <Tooltip text="Home">
        <Link to="/"><i onClick={handleClick1}
      style={{
        color: clicked1 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-solid fa-house"></i></Link>
        </Tooltip>
        <Tooltip text="Search CTRL+K">
            <i onClick={handleClick2}
      style={{
        color: clicked2 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }}className="fa-solid fa-magnifying-glass"></i>
            </Tooltip>

            <Tooltip text="Movies">

            <i onClick={handleClick3}
      style={{
        color: clicked3 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }}className="fa-solid fa-circle-play"></i>
            </Tooltip>

            <Tooltip text="TV shows">

            <i onClick={handleClick4}
      style={{
        color: clicked4 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-solid fa-tv"></i>
            </Tooltip>

            <Tooltip text="Anime">

            <i onClick={handleClick5}
      style={{
        color: clicked5 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-brands fa-screenpal"></i>


            </Tooltip>

            <Tooltip text="K-Drama">

            <i onClick={handleClick6}
      style={{
        color: clicked6 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-solid fa-masks-theater"></i>
            </Tooltip>

            <Tooltip text="Collections">

            <i onClick={handleClick7}
      style={{
        color: clicked7 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-regular fa-bookmark"></i>
            </Tooltip>


            <Tooltip text="Library">

            <i onClick={handleClick8}
      style={{
        color: clicked8 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-solid fa-book"></i>
            </Tooltip>

            <Tooltip text="Settings">

            <i onClick={handleClick9}
      style={{
        color: clicked9 ? '#ffd700' : '#64748b', // Change the color here
        cursor: 'pointer'
      }} className="fa-solid fa-gear"></i>

            </Tooltip>

        </div>
    </div>
  )
}

export default Menu
