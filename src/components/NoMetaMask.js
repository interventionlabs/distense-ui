import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Message } from 'semantic-ui-react'

import { getConnectedCorrectNetwork, hasWeb3 } from '../features/user/reducers'
import { NETWORK_NAME } from '../features/user/network'

export class MetaMaskWarning extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { hasWeb3, correctNetwork } = this.props
    console.log(`hasWeb3: ${hasWeb3}`)
    console.log(`correctNetwork: ${correctNetwork}`)
    return (
      <div>
        {(!hasWeb3 || !correctNetwork) && (
          <Grid>
            <Grid.Column>
              <Grid.Row className="margin-bottom-rem">
                <Message>
                  <Message.Item className="item">
                    If you don't have it installed, please install{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://metamask.io/"
                    >
                      MetaMask
                    </a>{' '}
                    and connect to {NETWORK_NAME}
                  </Message.Item>
                  <Message.Item className="item">
                    Your experience on this website will be degraded until you
                    do so
                  </Message.Item>
                </Message>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasWeb3: hasWeb3(state),
  correctNetwork: getConnectedCorrectNetwork(state)
})

export default connect(mapStateToProps, null)(MetaMaskWarning)
