import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Menu, Segment } from 'semantic-ui-react'
import TotalDID from './TotalDID'
import NoMetaMask from './NoMetaMask'
import Footer from '../features/footer/Footer'

export default ({ children }) => (
  <div>
    <Segment
      inverted
      textAlign="center"
      style={{
        padding: '.8em 0em'
      }}
      vertical
    >
      <Menu
        borderless
        fixed="top"
        className="inconsolata"
        inverted
        size="large"
      >
        <Container textAlign="center">
          <Menu.Item to="/" as={Link} position="left">
            <Image
              src="/public/rectangle-transparent-small.png"
              style={{
                width: '120px'
              }}
            />
          </Menu.Item>
          <Menu.Item to="/tasks/add" as={Link}>
            Propose
          </Menu.Item>
          <Menu.Item to="/tasks" as={Link}>
            View
          </Menu.Item>
          <Menu.Item to="/pullrequests/add" as={Link}>
            Submit
          </Menu.Item>
          <Menu.Item to="/pullrequests" as={Link}>
            Approve
          </Menu.Item>
          <Menu.Item to="/exchange" as={Link}>
            Exchange
          </Menu.Item>
          <TotalDID />
        </Container>
      </Menu>
    </Segment>

    <Container style={{ marginTop: '3.2em' }}>
      <NoMetaMask />
      {children}
    </Container>

    <Footer />
    {/*language=CSS*/}
    <style global jsx>{`
      .inconsolata {
        font-family: 'Inconsolata', sans-serif !important;
      }
      .item {
        /*font-size: 1.1rem;*/
      }
      .ui.container > .footer-item {
        padding: 0 0.75rem;
      }

      .ui.container > a.footer-item {
        text-decoration: underline;
      }
      .distense-green {
        color: rgb(13, 246, 121);
      }
      .margin-bottom-rem {
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
)
