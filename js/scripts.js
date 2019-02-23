var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const onChange = () => {
  const height = document.getElementById('height-input').value;
  const width = document.getElementById('width-input').value;
  const padding = document.getElementById('padding-input').value;
  const border = document.getElementById('border-input').value;
  const exampleOne = document.getElementById('example--one');
  const exampleTwo = document.getElementById('example--two');
  const actualHeightOne = document.getElementById('actual-height-one');
  const actualWidthOne = document.getElementById('actual-width-one');
  const actualHeightTwo = document.getElementById('actual-height-two');
  const actualWidthTwo = document.getElementById('actual-width-two');

  exampleOne.style.height = height + "px";
  exampleTwo.style.height = height + "px";
  exampleOne.style.width = width + "px";
  exampleTwo.style.width = width + "px";
  exampleOne.style.padding = padding + "px";
  exampleTwo.style.padding = padding + "px";
  exampleOne.style.border = border + "px" + " solid black";
  exampleTwo.style.border = border + "px" + " solid black";

  actualHeightOne.innerHTML = "Actual Height: " + (parseInt(height) + (parseInt(padding) * 2) + (parseInt(border) * 2));
  actualWidthOne.innerHTML = "Actual Width: " + (parseInt(width) + (parseInt(padding) * 2) + (parseInt(border) * 2));
  actualHeightTwo.innerHTML = "Actual Height: " + height;
  actualWidthTwo.innerHTML = "Actual Width: " + width;
}
