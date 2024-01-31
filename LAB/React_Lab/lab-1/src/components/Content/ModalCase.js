import React from 'react'

export default function ModalCase({setIsOpen, player}) {
  return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id='modal1' className='modal' style={{display: 'block', top: '35%', color: 'black'}}>
            <div className='modal-content'>
                <a className='right modal-close red-text'>Close</a>
                <h4>Video for ' {player.Title} '</h4>
                <div class="video-container">
                    <iframe width="853" height="480" src={player.Clip} frameborder="0" allowfullscreen/>
                </div>
            </div>
        </div>
    </div>
  )
}
