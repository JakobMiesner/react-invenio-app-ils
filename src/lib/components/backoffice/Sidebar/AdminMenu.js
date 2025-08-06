import { invenioConfig } from '@config';
import React, { Component } from 'react';
import Overridable from 'react-overridable';
import { Divider, Menu } from 'semantic-ui-react';

export default class AdminMenu extends Component {
  render() {
    return (
      <Overridable id="AdminMenu.layout">
        <>
          <Divider horizontal>Admin menu</Divider>
          <Menu text vertical className="bo-menu bo-menu-footer">
            <Menu.Item>
              <Menu.Menu>
                <Menu.Item
                  as="a"
                  href={`${invenioConfig.APP.INVENIO_UI_URL}/administration`}
                  target="_blank"
                >
                  Admin panel
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href={`${invenioConfig.APP.INVENIO_UI_URL}/administration/pages`}
                  target="_blank"
                >
                  Static pages
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </>
      </Overridable>
    );
  }
}
