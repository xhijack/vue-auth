module.exports = {

    request: function (req, token) {
        this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    },

    response: function (res) {
      try{
        if (res.data.status != 401) {
          return res.data.token
        }
      }catch (e) {
        return "";
      }
    }
};
