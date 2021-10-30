import React, { Component } from 'preact';
import PropTypes from 'prop-types';

/**
 * A toolbar that’s used for branding, navigation, search, and actions.
 *
 * @example ./../../docs/components/AppBar.md
 */
export class AppBar extends Component {
  static propTypes = {
    /**
     * title
     */
    title: PropTypes.string,

    /**
     * title style
     */
    titleStyle: PropTypes.object,

    /**
     * logo image src
     */
    logo: PropTypes.string,

    /**
     * logo style
     */
    logoStyle: PropTypes.object,

    /**
     * components on the left side of appbar
     */
    leftSection: PropTypes.element,

    /**
     * components on the right side of appbar
     */
    rightSection: PropTypes.element
  };

  static defaultProps = {
    title: '',
    titleStyle: {},
    logo: null,
    logoStyle: {},
    leftSection: '',
    rightSection: ''
  };

  static contextTypes = {
    theme: PropTypes.object
  };
  render() {
    return (
      <div>
        <p>header</p>
      </div>
    );
  }
}
