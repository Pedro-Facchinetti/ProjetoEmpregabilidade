import React, { Component } from 'react';
import styles from './ScrollToSectionButton.module.scss'; 

class ScrollToSectionButton extends Component {
  scrollToSection = () => {
    const { sectionId } = this.props;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { buttonLabel } = this.props;
    return (
      <button onClick={this.scrollToSection} className={styles.nav_button}>
        <span className={styles.button_label}>{buttonLabel}</span>
      </button>
    );
  }
}

export default ScrollToSectionButton;
