import { useState, useRef } from 'react'
import '../App.css'
import { getCoins } from '../api/api'
import { IoSearch } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { IoStar, IoClose } from "react-icons/io5";

export const Modal = () => {
    const [coins, setCoins] = useState([])
    const [closeIcon, setCloseIcon] = useState(false)
    const [value, setValue] = useState('')

    const searchCoins = async (e) => {
        setCloseIcon(true)
        setValue(e.target.value)
        console.log(e.target.value)
        let searched = e.target.value
        const res = await getCoins()
        const filtredCoins = res.filter((coin) => coin.includes(searched.toUpperCase()))
        setCoins(filtredCoins)
    }
    const cleanSerch = (e) => {
        console.log('op');
        setCloseIcon(false)
        setValue('')
        setCoins([])
    }
    return (
        <div>

            <div className="modal">
                <div className="search">
                    <div className="search__icon"><IoSearch /></div>

                    <div className="search__area">
                        <input className='input'
                            type="text"
                            placeholder='Search'
                            value={value}
                            onChange={(e) => searchCoins(e)} />
                    </div>
                    <div className="search__close" onClick={cleanSerch}>
                        {closeIcon && <IoClose />}
                    </div>
                </div>

                <div className="choose">
                    <div className='shoose__favorites'>
                        <div><IoStar /></div>
                        <div>FAVORITES</div>
                    </div>
                    <div>ALL COINS</div>
                </div>

                <div className="modalList">
                    {coins.map((coin) =>
                        <div className='modalList__item' key={coin}>
                            <span><IoMdStarOutline /> </span>  {coin}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}