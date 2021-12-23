module.exports = {
    format_amount: (amount) => {
        // format large numbers with commas
        
        return (Math.round(amount * 100) / 100).toFixed(2);
        // return parseInt(amount).toLocaleString();
      },
      timeConvert: (time)=> { 
        return time.toLocaleDateString()
      }
    };

