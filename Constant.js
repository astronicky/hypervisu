// screen
export const HOME = "Home";
export const ROOM = "Room";
export const SETTING = "Setting";
export const CONFIG = "Configuration";
export const CATEGORIES = "Categories";
export const ROOMS = "Rooms";
export const SMART_HOME = "SmartHome";
export const SHUTTER = "Shutter";
export const LIGHT = "Light";
export const CAMERA = "Camera";
export const LOGIN = "Login";
export const CONNECT = "Connect";
export const FORGOT_PASSWORD = "Forgot";
export const CLIMATE_DETAIL = "CliamteDetail";
export const POWER = "Power";
export const VIDEOPHONE = "videophone";
export const ACTION_BUTTONS = "Buttons";
// common
export const LOGO_TITLE = "HYPERVISU";
export const LOGO_SUB_TITLE = "BY ELAUSYS";
export const CANCEL = "Cancel";
export const USER_LABEL = "User";
export const PASSWORD_LABEL = "Password";
export const PLACEHOLDER_USERNAME = "Cahome";
export const PLACEFOLDER_PASSWORD = "********";
export const PLACEFOLDER_USEREMAIL = "Capicreative@gmail.com";
export const SINGIN_LABEL = "Sign In";
export const SINGIN_DESCIPTION = "Sign in by your ID to access the application.";
export const PASSWORD_FORGOTTEN = "Password Forgotten ?";
export const FORGOT_PASSWORD_LABEL = "Forgot Password";
export const TALK_LABEL = "Talk";
export const EDIT_LABEL = "EDIT";
export const FORGOT_PASSWORD_DESCRIPTION = "Please enter your information to receive your password by email.";
export const SEND_EMAIL = "Send by email";
export const EMAIL = "Email";
export const DONE = "Done";
export const OPEN_CONFIGURATION = "Open Configuration";
export const SERVER = "Server";
export const CONFIGURATION = "Configuration";
export const ACCESS = "Access";
export const AUDIO = "Audio";
export const CONTROL = "Control";
export const ENERGY = "Energy";
export const LIGHTING = "Lighting";
export const CLIMATE = "Climate";
export const CAMERA_MONITORING = "Camera/Monitoring";
export const ALARM_CLOCK = "Alarm Clock";
export const SAFETY_SECURITY = "Safety&Security";
export const NEWS = "News";
export const BRIGHTNESS = "Brightness";
export const COLOR = "Color";
// action button
export const ACTION_TURN_ON = "TurnOn";
export const ACTION_TURN_OFF = "TurnOff";
export const ACTION_ARROW_DOWN = "ArrowDown";
export const ACTION_ARROW_UP = "ArrowUp";
export const ACTION_MINUS = "Minus";
export const ACTION_PLUS = "Plus";
export const ACTION_ARROW_LEFT = "ArrowLeft";
export const ACTION_HEART = "Heart";
export const ACTION_CLOCK = "Clock";
export const ACTION_MENU_LIST = "MenuList";
export const ACTION_MORE_DETAIL = "MoreDetail";
export const ACTION_EDIT_BUTTON = "EditButton";
export const ACTION_CIRECLE_PLUS = "CireclePlus";
export const ACTION_SOUND_VOLUME = "SoundVolume";
export const ACTION_CATEGORIES_BUTTON = "PauseButton";
export const ACTION_LOGOUT_BUTTON = "LogoutButton";
export const ACTION_TALK_BUTTON = "TalkButton";
export const ACTION_OPTION_BUTTON = "OptionButton";
export const ACTION_REC_SWITCH_BUTTON = "RecSwithButton";
export const ACTION_CIR_SWITCH_BUTTON = "CirSwithButton";
export const ACTION_LAMP_STATUS = "LampStatus";
export const ACTION_SHUTTER_STATUS = "ShutterStatus";
export const ACTION_LIGHT_STATUS = "LightStatus";
export const ACTION_DISPLAY_STATUS = "DisplayStatus";
export const ACTION_ANALOGUE_VALUE_STATUS = "AnalogueValueStatus";
export const ACTION_CLOSE_BUTTON = "CloseButton";
export const ACTION_SWITCH = "Switch";

// Temp data

export const SETTING_DATA = [
    { 
        name: 'Notifications',
        path: LOGIN
    },
    { 
        name: 'Background Color',
        path: LOGIN
    },
    { 
        name: 'Widget Background',
        path: LOGIN
    },
    { 
        name: 'Text Color',
        path: LOGIN
    },
    { 
        name: 'Icons Color',
        path: LOGIN
    },
    { 
        name: 'Active Color',
        path: LOGIN
    },
    { 
        name: OPEN_CONFIGURATION,
        path: CONFIG
    },
];

export const CONFIG_DATA = [
    {
        name: 'Server S/N',
        info: 'XXXXXXXXXX'
    },
    {
        name: 'Server Ver.',
        info: '1.3.1'
    },
    {
        name: 'Min. App. Ver.',
        info: '1.0.0'
    },
    {
        name: 'API Ver.',
        info: '1.0.0'
    }
];

export const CATEGORY_DATA = [
    {
        title: 'Access',
        imgUrl: require('./assets/images/categories/access.png'),
        path: SHUTTER
    },
    {
        title: 'Audio',
        imgUrl: require('./assets/images/categories/audio.png'),
        path: VIDEOPHONE
    },
    {
        title: 'Control',
        imgUrl: require('./assets/images/categories/control.png'),
        path: SHUTTER
    },
    {
        title: 'Energy',
        imgUrl: require('./assets/images/categories/energy.png'),
        path: POWER
    },
    {
        title: 'lightning',
        imgUrl: require('./assets/images/categories/lightning.png'),
        path: LIGHT
    },
    {
        title: 'Shutter',
        imgUrl: require('./assets/images/categories/shutter.png'),
        path: SHUTTER
    },
    {
        title: 'Climate',
        imgUrl: require('./assets/images/categories/climate.png'),
        path: SHUTTER
    },
    {
        title: 'Camera/Monitoring',
        imgUrl: require('./assets/images/categories/camera-monitoring.png'),
        path: CAMERA
    },
    {
        title: 'Alarm Clock',
        imgUrl: require('./assets/images/categories/alarm-clock.png'),
        path: SHUTTER
    },
    {
        title: 'Safety & Security',
        imgUrl: require('./assets/images/categories/alert.png'),
        path: SHUTTER
    },
    {
        title: 'News',
        imgUrl: require('./assets/images/categories/news.png'),
        path: SHUTTER
    },
];

export const BEDROOM = "Bedroom";
export const BATHROOM = "Bathroom";
export const GARAGE = "Garage";
export const KITCHEN = "Kitchen";
export const STUDY = "Study";
export const BASEMENT = "Basement";
export const OUTSIDE = "Outside";
export const HALLWAY = "Hallway";
export const LIVING_ROOM = "Living Room";
export const SARAH_DEDROOM = "Sarah Redroom";

export const ROOMS_DATA = [
    {
        room: BEDROOM,
        imgUrl: require('./assets/images/rooms/bedroom.png')
    },
    {
        room: BATHROOM,
        imgUrl: require('./assets/images/rooms/bathroom.png')
    },
    {
        room: GARAGE,
        imgUrl: require('./assets/images/rooms/garage.png')
    },
    {
        room: KITCHEN,
        imgUrl: require('./assets/images/rooms/kitchen.png')
    },
    {
        room: STUDY,
        imgUrl: require('./assets/images/rooms/study.png')
    },
    {
        room: BASEMENT,
        imgUrl: require('./assets/images/rooms/basement.png')
    },
    {
        room: 'Outside',
        imgUrl: require('./assets/images/rooms/outside.png')
    },
    {
        room: 'Hallway',
        imgUrl: require('./assets/images/rooms/hallway.png')
    },
    {
        room: 'Living Room',
        imgUrl: require('./assets/images/rooms/living-room.png')
    },
    {
        room: 'Sarah Bedroom',
        imgUrl: require('./assets/images/rooms/sarah-bedroom.png')
    },
];

export const FAVORITE_ROOMS_DATA = [
    {
        room: 'Laundry',
        imgUrl: require('./assets/images/laundry.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF'
    },
    {
        room: 'Kitchen',
        imgUrl: require('./assets/images/kitchen.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF'
    },
    {
        room: 'Main Bedroom',
        imgUrl: require('./assets/images/bed.png'),
        bgColor: '#FFFFFF',
        textColor: '#000000'
    },
    {
        room: 'Laundry',
        imgUrl: require('./assets/images/laundry.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF'
    },
    {
        room: 'Kitchen',
        imgUrl: require('./assets/images/kitchen.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF'
    },
];

export const FAVORITE_CATEGORY_DATA = [
    {
        title: 'Lightning',
        imgMainUrl: require('./assets/images/favorite_category/lamp.png'),
        bgColor: '#FFFFFF',
        textColor: '#000000',
        imgUpUrl: '',
    },
    {
        title: 'Climate',
        imgMainUrl: require('./assets/images/favorite_category/thermometer.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/favorite_category/timer.png'),
    },
    {
        title: 'Shutter',
        imgMainUrl: require('./assets/images/favorite_category/blinds.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/favorite_category/uparrow.png'),
        imgDownUrl: require('./assets/images/favorite_category/downarrow.png')
    },
    {
        title: 'Lightning',
        imgMainUrl: require('./assets/images/favorite_category/lamp.png'),
        bgColor: '#FFFFFF',
        textColor: '#000000',
        imgUpUrl: '',
    },
    {
        title: 'Climate',
        imgMainUrl: require('./assets/images/favorite_category/thermometer.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/favorite_category/timer.png'),
    }
];

export const SNOW = require('./assets/images/snow.png');
export const CLOSE = require('./assets/images/close.png');
export const CHECKBOX_WHITE = require('./assets/images/checkbox_white.png');
export const CHECKBOX = require('./assets/images/checkbox.png');
export const GRAPH = require('./assets/images/power/graph.png');
export const OVAL = require('./assets/images/power/oval.png');
export const OVAL_1 = require('./assets/images/power/oval_1.png');
export const OVAL_2 = require('./assets/images/power/oval_2.png');
export const CAMERA_IMAGE = require('./assets/images/camera/camera-bitmap.png');
export const CAMERA_RED = require('./assets/images/camera/red.png');
export const CAMERA_GREEN = require('./assets/images/camera/green.png');
export const SLIDER_THUMB = require('./assets/images/slider_thumb.png');
// export const ELLIPSE_BLACK = require('./assets/images/ellipse.png');
export const UPARROW = require('./assets/images/favorite_category/uparrow.png');
export const DOWNARROW = require('./assets/images/favorite_category/downarrow.png');
export const ELLIPSE = require('./assets/images/favorite_category/ellipse.png');
export const RECT = require('./assets/images/favorite_category/rect.png');
export const NUMBER08 = require('./assets/images/favorite_category/08.png');
export const NUMBER69 = require('./assets/images/favorite_category/69.png');
export const LAMP = require('./assets/images/favorite_category/lamp-white.png');
export const BLINDS_WHITE = require('./assets/images/favorite_category/blinds-white.png');
export const TIMER = require('./assets/images/favorite_category/timer.png');
export const LAMP_WHITE = require('./assets/images/room/lamp.png');
export const STAIRE = require('./assets/images/favorite_category/staire.png');
export const DIMMER = require('./assets/images/room/dimmer.png');

export const FAVORITE_DATA = [
    {
        title: 'Music',
        imgMainUrl: require('./assets/images/room/music.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/plus.png'),
        imgDownUrl: require('./assets/images/room/minus.png')
    },
    {
        title: 'Climate',
        imgMainUrl: require('./assets/images/room/climate.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/timer.png'),
    },
    {
        title: 'Shutter',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/uparrow.png'),
        imgDownUrl: require('./assets/images/room/downarrow.png')
    },
    {
        title: 'Climate',
        imgMainUrl: require('./assets/images/room/climate.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/timer.png'),
    },
    {
        title: 'Shutter',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/uparrow.png'),
        imgDownUrl: require('./assets/images/room/downarrow.png')
    }
];

// Screen Names for unavailable Footer
export const HIDE_FOOTER_SCREENS = [CONNECT, LOGIN];

export const FOOTER_NAV_BAR = {
    [HOME]: {
        icon: "home",
        tab: HOME
    },
    [ROOMS]: {
        icon: "cube",
        tab: ROOMS
    },
    [CATEGORIES]: {
        icon: "th-large",
        tab: CATEGORIES
    },
    [SETTING]: {
        icon: "cog",
        tab: SETTING
    },
    // [ACTION_BUTTONS]: {
    //     icon: "cog",
    //     tab: ACTION_BUTTONS
    // },
}