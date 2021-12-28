module.exports = {
    format_amount: (amount) => {
        // format large numbers with commas
        
        // return (Math.round(amount * 100) / 100).toFixed(2);
        let dollarUSLocale = Intl.NumberFormat('en-US')

        return dollarUSLocale.format(amount);
      },
      timeConvert: (time)=> { 
        return time.toLocaleDateString()
      }
    };

