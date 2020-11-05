import React, { Component } from 'react';
import { Homebg } from './Homebg';
import './about.css';
require('materialize-css/dist/css/materialize.min.css');

export class About extends React.Component {
	render() {
		return (
			<div className='about-us' id='about'>
				<div className='row'>
					<Homebg />
				</div>

				<article
					style={{
						alignContent: 'center',
						textAlign: 'justify',
						width: '50em',
						marginLeft: '30%',
						marginBottom: '3em',
					}}>
					<h1 class='headings'> Who we are</h1>

					<p>
						Who we are | Mastano Mining and LOGISTICS Limited was
						established in May 2018. We were inspired by the easy
						access that people have to technology today, where one
						can shop online from anyway and to make it safe for
						anyone wishing to trade in precious stones. Our
						speciality is dealing in unprocessed or processed
						jewellery. Hence MCS has a bright future due to its
						placement in the local market plus the relationship it
						has with the sellers and the buyers. Dubai will be our
						main port for importing and exporting the products. Our
						company was established due to our well-rooted network
						especially in most African countries where most of the
						gold and diamonds and other precious minerals are mined.
						Many companies have to think twice before venturing into
						this part of the region due to the many risks involved
						without proper market research and the people to deal
						with, but we make it possible ~ for anyone to sale or
						buy with guaranteed security.
					</p>
					<p>
						<h1 class='headings'>Our Vision </h1>
						To be the most Trusted and Reliable Global Partner. Our
						Mission To establish and acquire Gold and rough gem
						grade diamonds from the miners basing ourselves on a
						well-rooted network worldwide. To be the leader in
						sourcing high-quality gem trade from the miners and to
						deliver it to our customers in a safe and secure
						transaction. Our Core Values Reliability * Trust *«
						Transparency * Safe and Secure » People
					</p>
					<p>
						<h1 class='headings'>SECURE</h1>
						Safe and Secure: We transact our business in a safe and
						secure manner by adhering to all the set rules of
						different governments and bodies to avoid unnecessary
						mistakes that can cause damages to business image and
						reputa- tions. People - We want to be a socially
						responsible company where we keep in mind the
						environment and people exploitation. We want to make
						sure we source our products where human factor has been
						put in place.
					</p>
					<p>
						Compliance and Corporate Governance is One of the MML's
						primary business objectives requires adherence to local,
						national and international laws. Risk management and
						internal controls are embedded throughout us to ensure
						the accuracy and validity of certificates, licenses that
						the company provide to our customers, our stakeholders
						and the authorities. MCSL is a member of the UAE
						Kimberley Processes. We are listed in UAE KP website. We
						are also registered under UAE customs with importation
						code awarded.
					</p>
				</article>
			</div>
		);
	}
}
export default About;
