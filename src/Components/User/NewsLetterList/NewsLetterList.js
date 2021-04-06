import React from 'react'
import {getDate, getTime} from '../../utils/Validation/Validation'
import {BsFillBackspaceFill} from 'react-icons/bs'
import './NewsLetterList.css'

const NewsLetterList = (props)=>{

    const NewsLetterCard = (data)=>{
        // alert(JSON.stringify(data));
        const d = new Date(data.createdAt);
        const date = getDate(d);
        const time = getTime(d);
        return(
            <div className="newsLetterCard">
                <div className="newsLetterListText">
                    <div className="newsLetterEmail">
                        {data.email}
                    </div>
                    <div className="newsLetterDate">
                        {date}
                    </div>
                    <div className="newsLetterTime">
                        {time}
                    </div>
                </div>
                <div className="newsLetterRemove">
                    <BsFillBackspaceFill />
                </div>
            </div>
        )
    }
    const AllNewsLetter = (props.newsLetter).map( item=>{
        return <NewsLetterCard {...item} />
    })
    // alert(JSON.stringify(props))
    return(
        
        <div className="newsLetterContainer">
            {AllNewsLetter}
        </div>
    )
}

export default NewsLetterList;