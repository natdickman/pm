
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(python);

function python(props) {
  var model = props.model;

  var link = 'https://pypi.python.org/pypi/' + encodeURIComponent(model.name);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
