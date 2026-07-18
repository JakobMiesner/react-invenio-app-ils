import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon } from 'semantic-ui-react';

/**
 * A popup triggered by an icon.
 *
 * Semantic renders <Icon> as an <i>, which has no role and is not focusable:
 * an aria-label on it is not exposed, and a hover-only popup is unreachable by
 * keyboard. So the icon is given a role, put in the tab order, and the popup is
 * opened on focus as well as hover.
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
  /* required when `content` is not a plain string */
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
