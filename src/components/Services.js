import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title:"free cocktails",
                info:'Every evening, Canopy hotels has free tastings at their hotel bar, where you can sample local wines, beers and spirits at no cost.'

            },

            {
                icon: <FaHiking/>,
                title:"Endless Hiking",
                info:'The Endless Wall Trail is a lesser-known trail in the New River Gorge, making it a perfect place for hikers to get away from the crowds and experience the New River Gorges natural beauty in a more remote setting. '

            },

            {
                icon: <FaShuttleVan/>,
                title:"free Shuttle",
                info:'Customers must be registered with Paratransit in advance of making a reservation.'

            },
            {
                icon: <FaBeer/>,
                title:"Strong and dark chilled Beer",
                info:'Good news for the beer-lovers out there: you can get free beer. Drinking is expensive. Pre-gaming doesn’t have the appeal as it once did and now that you’re of age, you want to hit the bars with your friends and proudly flaunt that ID of yours.'

            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title='services'/>
            <div className="services-center">
                {this.state.services.map((item,index )=> {
                return <article key={index} className="service">
                    <span> {item.icon} </span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                </article>
                })}
            </div>
               </section>
        );
    } 
}
