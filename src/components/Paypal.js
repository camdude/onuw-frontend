import React from "react";

import Text from '../components/UIElements/Text';

const Paypal = () => {
  return (
    <React.Fragment>
      <Text>
        If you like the direction and outcomes of this project please consider
        donating. It will help keep this tool free in future and help support
        the development of it as well. You can do this through the donation link below.
      </Text>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="BZWV3YBF5FQMJ" />
        <input type="hidden" name="currency_code" value="AUD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_AU/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </React.Fragment>
  );
};

export default Paypal;
