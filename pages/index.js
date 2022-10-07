import Head from "next/head"
// import styles from "../styles/Home.module.css"
// import Web3 from "web3"
import React, { Component } from "react"
import 'semantic-ui-css/semantic.min.css'
import { Card } from "semantic-ui-react"
import factory from "../ethereum/factory"

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    return { campaigns }
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      }
    })

    return <Card.Group items={items} />
  }

  render() {
    return (
      <div>
        <Head>
          <title>CrowdCoin</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>{this.renderCampaigns()}</div>
      </div>
    )
  }
}

export default CampaignIndex

// To do list for the Campaign list page
// 1 - configure web3 with a provider from Metamask
// 2 - tell web3 that a deployed copy of the 'Campaign Factory' exists
// 3 - use Factory instance to retrieve a list of deployed campaigns
// 4 - use React to show something about each campaign
