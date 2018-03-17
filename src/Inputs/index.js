// ========== ARRAY INPUTS
import Datalist from './Array/Datalist';
import Range from './Array/Range';
import Select from './Array/Select';

// ========== BOX INPUTS
import Checkbox from './Box/Checkbox';
import Radio from './Box/Radio';
import OnOff from './Box/OnOff';

// ========== FIELD INPUTS
import Email from './Field/Email';
import Name from './Field/Name';
import Number from './Field/Number';
import Password from './Field/Password';
import Phone from './Field/Phone';
import Text from './Field/Text';
import TextArea from './Field/TextArea';

// ========== SPECIAL INPUTS
import File from './Special/File';
import Recaptcha from './Special/Recaptcha';

export default [
	Checkbox, Datalist, Email, File, Name, Number, OnOff, Password, Phone,
	Radio, Range, Select, Text, TextArea,
	Recaptcha
];
