import Icon from './Icon';
import Chip from './Chip';
import Link from './Link';
import Tabs from './Tabs';
import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import CssBaseline from './CssBaseline';
import Autocomplete from './Autocomplete';
import LoadingButton from './LoadingButton';
import InputAdornment from './InputAdornment';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Icon(theme),
    Chip(theme),
    Link(theme),
    Tabs(theme),
    Card(theme),
    Input(theme),
    Paper(theme),
    Select(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(theme),
    Autocomplete(theme),
    LoadingButton(theme),
    InputAdornment(theme)
  );
}
