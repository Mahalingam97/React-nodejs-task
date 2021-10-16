import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";


export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const emojiData=this.props.emojiData;
    return (
      <div className="component-emoji-results">
        {emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}
