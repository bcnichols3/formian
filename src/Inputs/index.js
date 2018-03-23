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
import Number from './Field/Number';
import Password from './Field/Password';
import Tel from './Field/Tel';
import Text from './Field/Text';
import TextArea from './Field/TextArea';

// ========== TIME INPUTS
import Month from './Time/Month';
// import Date from './Time/Date';
// import DateTime from './Time/DateTime';
// import Time from './Time/Time';
// import Week from './Time/Week';

// ========== PRESET BASIC INPUTS
import Name from './Presets/Basic/Name';

// ========== PRESET MONEY INPUTS

// ========== SPECIAL INPUTS
// import Color from './Special/Color';
import File from './Special/File';
import Recaptcha from './Special/Recaptcha';

export default [
	Checkbox, Datalist, Email, File, Month, Number, OnOff,
	Password, Tel, Radio, Range, Select, Text, TextArea,
	Recaptcha
];
