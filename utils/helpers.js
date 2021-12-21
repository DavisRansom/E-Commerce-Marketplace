module.exports = {
    format_amount: (amount) => {
        // format large numbers with commas
        return parseInt(amount).toLocaleString();
      }

};
