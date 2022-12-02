
   
    document.getElementById('fill_in').style.display = 'block';
    document.getElementById('fill_in').style.color = 'red';
    document.getElementById('ready').style.display = 'none';
    document.getElementById('ready').style.color = 'red';



    function predict() {
      d3.json("./data/pred.json").then(result => {
            final_v[2]=parseInt(final_v[0])*parseFloat(final_v[2]).toString();
            final_v[7]=(parseFloat(final_v[7])*5).toString();
            final_v[8]=(parseFloat(final_v[8])*2).toString();
            test=final_v.join()
            console.log(test);
            pred_star=result[test]
            console.log(pred_star);
            console.log(final_v);
            
            document.getElementById("demo").innerHTML = 'The predicted stars of the particular bussines would be:' +pred_star;
          });};
    var final_v;
    $('.custom-select').change(function() {
        values = $('.custom-select').find('option:selected').map(function() {
          return $(this).val()
        }).get();
        $(document).ready(function() {

      if (values.includes("")) {

          document.getElementById('fill_in').style.display = 'block';
          document.getElementById('ready').style.display = 'none';
      } else {
        document.getElementById('fill_in').style.display = 'none';
          document.getElementById('ready').style.display = 'block';

      };
      });

      final_v=values;
      });



