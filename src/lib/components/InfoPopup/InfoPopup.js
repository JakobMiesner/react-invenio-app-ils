/*
 * SPDX-FileCopyrightText: 2020-2021 CERN.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon } from 'semantic-ui-react';

/**
 * Icon-triggered popup that also works for keyboard users: Semantic's <Icon>
 * renders as a bare <i>, so it needs role/tabIndex and open-on-focus.
 */
export const PopupIcon = ({
  content,
  icon,
  ariaLabel,
  iconProps,
  ...popupProps
}) => (
  <Popup
    content={content}
    on={['hover', 'focus']}
    trigger={
      <Icon
        name={icon}
        role="button"
        tabIndex={0}
        aria-label={
          ariaLabel ||
          (typeof content === 'string' ? content : 'More information')
        }
        {...iconProps}
      />
    }
    {...popupProps}
  />
);

PopupIcon.propTypes = {
  content: PropTypes.node.isRequired,
  icon: PropTypes.string,
  // required when content is not a plain string
  ariaLabel: PropTypes.string,
  iconProps: PropTypes.object,
};

PopupIcon.defaultProps = {
  icon: 'info circle',
  ariaLabel: null,
  iconProps: {},
};

export const InfoPopup = ({ children, message }) => {
  return (
    <span className="info-popup">
      {children}
      <PopupIcon
        content={message}
        icon="question circle outline"
        iconProps={{ color: 'grey' }}
        wide="very"
      />
    </span>
  );
};

InfoPopup.propTypes = {
  children: PropTypes.node,
  message: PropTypes.node.isRequired,
};

InfoPopup.defaultProps = {
  children: null,
};
