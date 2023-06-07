import React from 'react'
import "./css/Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>      
        </div>

        {newsArticle("Bitcoin Breaks $22k","Top news - 10099 readers")}
        {newsArticle("State Street to hire 5,000","1d ago - 9099 readers")}
        {newsArticle("More women to enter IT workforce","10h ago - 3099 readers")}
        {newsArticle("Further studies - the right move?","2d ago - 3025 readers")}
        {newsArticle("FAANG layoffs","3d ago - 2436 readers")}
    </div>
  )
}

export default Widgets