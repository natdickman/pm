import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(cryo);

function cryo(props) {
  var model = props.model;

  var link = 'http://google.com';
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
