import svgxuse from 'svgxuse'; // polyfill to load svgs from external URI (unsupported by IE)
import Navigation from './modules/nav';
import Faqs from './modules/faqs';
import '../styles/style.scss';

const navigation = new Navigation();
const faqs = new Faqs();
