import '../css/about.css';
import Rlogo from '../assets/rlogo.png';
import sasLogo from '../assets/saslogo.png';

function About() {

    const skills = [
        {
            name: "Python",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
            </svg>
        },
        {
            name: "Java",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
            </svg>
        },
        {
            name: "Javascript",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
            </svg>
        },
        {
            name: "Git",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
            </svg>
        },
        {
            name: "HTML",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
        },
        {
            name: "CSS",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
            </svg>
        },
        {
            name: "MySQL",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="#216287"></circle><circle cx="24" cy="24" r="18" fill="#e87912"></circle><path fill="#216287" d="M29.69,31.95c0,4.35-3.09,7.98-7.19,8.82l-0.55,0.1C13.53,39.87,7,32.7,7,24c0-9.39,7.61-17,17-17 c0.17,0,0.35,0,0.52,0.01c-3.5,1.23-6.02,4.56-6.02,8.49c0,1.49,0.36,2.9,1.01,4.14c0.86,1.66,2.3,2.94,3.97,3.78l1.22,0.61 c1.67,0.84,3.12,2.12,3.98,3.78C29.32,29.05,29.69,30.46,29.69,31.95z"></path><path fill="#fff" d="M24,6C14.059,6,6,14.059,6,24c0,8.671,6.132,15.906,14.295,17.614l0.012,0.063l0.159-0.029 C21.609,41.876,22.79,42,24,42c9.941,0,18-8.059,18-18C42,14.059,33.941,6,24,6z M8,24c0-7.935,5.813-14.521,13.4-15.769 C19.309,9.994,18,12.626,18,15.5c0,1.519,0.367,3.029,1.062,4.368c0.865,1.668,2.316,3.051,4.197,3.996l1.219,0.613 c1.691,0.852,2.991,2.084,3.759,3.564c0.63,1.214,0.949,2.528,0.949,3.907c0,3.645-2.35,6.857-5.711,8.024 C14.897,39.693,8,32.645,8,24z M25.905,39.876c2.599-1.721,4.281-4.668,4.281-7.927c0-1.52-0.367-3.029-1.062-4.368 c-0.865-1.668-2.316-3.051-4.197-3.996l-1.219-0.613c-1.692-0.852-2.991-2.083-3.759-3.564C19.319,18.193,19,16.879,19,15.5 c0-3.173,1.781-6.017,4.464-7.473C23.643,8.021,23.819,8,24,8c8.822,0,16,7.178,16,16C40,32.177,33.831,38.93,25.905,39.876z"></path><path fill="#fff" d="M38.458,27.528c-0.776-0.927-2.018-1.829-2.809-3.135c-0.111-0.184-0.053-0.407,0.135-0.507 C36.799,23.342,36.978,23.441,38,23c-1-1-2.037-1.36-3.681-1.774c-0.322-0.067-0.507-0.337-0.561-0.634 c-0.088-0.323-0.275-0.87-0.471-1.307c-1.421-2.871-3.192-6.625-6.786-6.907c-0.237-0.003-0.463-0.099-0.62-0.257 c-0.453-0.432-1.087-0.967-1.67-1.055c-0.115,0.011-0.057-0.028-0.146,0.054c-0.233,0.273-0.186,0.283-0.026,0.63 c0.216,0.369,0.628,0.791,1.033,1.208c0.411,0.531,0.126,1.308,0.396,1.904c0.111,0.423,0.344,0.923,0.603,1.229 c0.125,0.161,0.163,0.365,0.124,0.55c-0.288,1.377-0.491,2.862-0.212,4.241c0.006,0.147,0.15,0.202,0.256,0.149 c0.033-0.026,0.032-0.008,0.16-0.233C26.556,20.448,27.675,18.307,28,19c0.473,1.538,1.13,4.53,2.522,5.455 c0.059,0.025,0.013,0.122-0.045,0.089c-1.454-0.751-2.631-2.682-2.978-3.984c-0.27,0.023-0.512,0.242-0.648,0.493 c-0.205,0.719-1.26,0.756-1.449-0.013c-0.076-0.298-0.138-0.6-0.167-0.905c-0.111-1.11-0.041-2.753,0.211-3.582 c-0.704-0.76-1.098-2.227-1.005-2.995c-0.413-0.418-0.847-0.829-1.17-1.344c-0.608-0.774-0.076-2.132,0.967-2.083 c0.924,0.077,1.672,0.707,2.33,1.301c0.729-0.065,2.173,0.444,2.982,0.991c1.834,1.191,2.799,3.236,3.847,5.078 c0.409,0.836,1.142,2.25,1.123,2.924c1.866,0.578,3.975,1.277,5.039,3.046c0.019,0.035,0.001,0.08-0.038,0.091 c0,0-2.9,0.91-2.9,0.91l1.921,3C38.575,27.522,38.495,27.584,38.458,27.528L38.458,27.528z"></path><path fill="#fff" d="M27.046,13.688l0.833,1.189C27.879,14.878,28.83,13.53,27.046,13.688z"></path><g><path fill="#fff" d="M9.762,20.071c0.776,0.927,2.018,1.829,2.809,3.135c0.111,0.184,0.053,0.407-0.135,0.507 c-1.015,0.543-1.193,0.444-2.215,0.886c1,1,2.037,1.36,3.681,1.774c0.322,0.067,0.507,0.337,0.561,0.634 c0.088,0.323,0.275,0.87,0.471,1.307c1.421,2.871,3.192,6.625,6.786,6.907c0.237,0.003,0.463,0.099,0.62,0.257 c0.453,0.432,1.087,0.967,1.67,1.055c0.115-0.011,0.057,0.028,0.146-0.054c0.233-0.273,0.186-0.283,0.026-0.63 c-0.216-0.369-0.628-0.791-1.033-1.208c-0.411-0.531-0.126-1.308-0.396-1.904c-0.111-0.423-0.344-0.923-0.603-1.229 c-0.125-0.161-0.163-0.365-0.124-0.55c0.288-1.377,0.491-2.862,0.212-4.241c-0.006-0.147-0.15-0.202-0.256-0.149 c-0.033,0.026-0.032,0.008-0.16,0.233c-0.158,0.348-1.277,2.49-1.602,1.796c-0.473-1.538-1.13-4.53-2.522-5.455 c-0.059-0.025-0.013-0.122,0.045-0.089c1.454,0.751,2.631,2.682,2.978,3.984c0.27-0.023,0.512-0.242,0.648-0.493 c0.205-0.719,1.26-0.756,1.449,0.013c0.076,0.298,0.138,0.6,0.167,0.905c0.111,1.11,0.041,2.753-0.211,3.582 c0.704,0.76,1.098,2.227,1.005,2.995c0.413,0.418,0.847,0.829,1.17,1.344c0.608,0.774,0.076,2.132-0.967,2.083 c-0.924-0.077-1.672-0.707-2.33-1.301c-0.729,0.065-2.173-0.444-2.982-0.991c-1.834-1.191-2.799-3.236-3.847-5.078 c-0.409-0.836-1.142-2.25-1.123-2.924c-1.866-0.578-3.975-1.277-5.039-3.046c-0.019-0.035-0.001-0.08,0.038-0.091 c0,0,2.9-0.91,2.9-0.91l-1.921-3C9.645,20.077,9.725,20.016,9.762,20.071L9.762,20.071z"></path><path fill="#fff" d="M21.174,33.911l-0.833-1.189C20.342,32.722,19.39,34.07,21.174,33.911z"></path></g>
            </svg>
        },
        {
            name: "Django",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#004d40" fillRule="evenodd" d="M8,16v12.646C6.655,28.9,5.949,29,4.878,29 C1.67,28.997,0,27.565,0,24.816c0-2.649,1.771-4.368,4.516-4.368c0.426,0,0.75,0.033,1.143,0.134V16H8z M5.659,22.672 c-0.308-0.1-0.561-0.134-0.886-0.134c-1.328,0-2.096,0.809-2.096,2.228c0,1.381,0.734,2.143,2.079,2.143 c0.291,0,0.527-0.016,0.903-0.067V22.672L5.659,22.672z" clipRule="evenodd"></path><path fill="#004d40" fillRule="evenodd" d="M12,20.046v6.618c0,2.076-0.155,3.224-0.612,4.084 c-0.426,0.827-0.987,1.349-2.146,1.925l-2.437-1.149c1.159-0.539,1.721-1.015,2.079-1.742c0.375-0.743,0.494-1.754,0.494-4.017 v-5.721H12z" clipRule="evenodd"></path><rect width="2.623" height="2.713" x="9.377" y="16" fill="#004d40" fillRule="evenodd" clipRule="evenodd"></rect><path fill="#004d40" fillRule="evenodd" d="M13.734,20.876c1.136-0.552,2.223-0.795,3.408-0.795 c1.321,0,2.189,0.363,2.573,1.073C19.93,21.551,20,22.068,20,23.175v5.407c-1.152,0.171-2.606,0.294-3.673,0.294 c-2.156,0-3.123-0.778-3.123-2.505c0-1.868,1.285-2.731,4.441-3.006V22.78c0-0.483-0.235-0.658-0.884-0.658 c-0.95,0-2.02,0.278-3.024,0.812L13.734,20.876z M17.761,25.107c-1.702,0.171-2.255,0.449-2.255,1.141 c0,0.518,0.318,0.761,1.02,0.761c0.384,0,0.735-0.034,1.235-0.12L17.761,25.107L17.761,25.107z" clipRule="evenodd"></path><path fill="#004d40" fillRule="evenodd" d="M21.418,20.693c1.52-0.421,2.772-0.613,4.041-0.613 c1.318,0,2.273,0.317,2.839,0.93C28.83,21.588,29,22.222,29,23.573v5.303h-2.574v-5.195c0-1.038-0.335-1.424-1.252-1.424 c-0.351,0-0.669,0.035-1.186,0.195v6.425h-2.57V20.693z" clipRule="evenodd"></path><path fill="#004d40" fillRule="evenodd" d="M30.177,30.006c0.919,0.486,1.839,0.71,2.812,0.71 c1.721,0,2.454-0.473,2.454-2.176v-0.052c-0.51,0.258-1.025,0.366-1.704,0.366c-2.302,0-3.739-1.547-3.739-3.997 c0-3.043,2.141-4.762,5.974-4.762c1.126,0,2.167,0.121,3.427,0.383l-0.899,1.93c-0.699-0.138-0.057-0.021-0.584-0.072v0.279 l0.034,1.13l0.017,1.461c0.017,0.366,0.017,0.73,0.034,1.096v0.73c0,2.295-0.19,3.131-0.751,4.02 c-0.818,1.302-2.234,1.947-4.246,1.947c-1.024,0-1.91-0.155-2.829-0.521V30.006L30.177,30.006z M35.392,22.251h-0.085h-0.19 c-0.51-0.017-1.108,0.121-1.518,0.383c-0.628,0.365-0.953,1.027-0.953,1.964c0,1.337,0.649,2.102,1.808,2.102 c0.358,0,0.649-0.069,0.987-0.172v-0.193v-0.73c0-0.314-0.017-0.662-0.017-1.027l-0.017-1.234l-0.017-0.886V22.251z" clipRule="evenodd"></path><path fill="#004d40" fillRule="evenodd" d="M43.566,20.046c2.753,0,4.434,1.66,4.434,4.348 c0,2.756-1.752,4.483-4.544,4.483c-2.756,0-4.456-1.659-4.456-4.33C39.005,21.774,40.757,20.046,43.566,20.046z M43.509,26.752 c1.057,0,1.681-0.838,1.681-2.294c0-1.439-0.607-2.294-1.663-2.294c-1.093,0-1.718,0.838-1.718,2.294 C41.81,25.914,42.438,26.752,43.509,26.752L43.509,26.752z" clipRule="evenodd"></path>
            </svg>
        },
        {
            name: "React",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
            </svg>
        },
        {
            name: "Tableau",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <rect width="1.5" height="9" x="22.75" y="1" fill="#78909c"></rect><rect width="9" height="1.5" x="19" y="4.75" fill="#78909c"></rect><rect width="1.5" height="9" x="40.75" y="19" fill="#5c6bc0"></rect><rect width="9" height="1.5" x="37" y="22.75" fill="#5c6bc0"></rect><rect width="1.5" height="9" x="4.75" y="19" fill="#78909c"></rect><rect width="9" height="1.5" x="1" y="22.75" fill="#78909c"></rect><rect width="1.5" height="9" x="22.75" y="37" fill="#5c6bc0"></rect><rect width="9" height="1.5" x="19" y="40.75" fill="#5c6bc0"></rect><rect width="17" height="3" x="15" y="22" fill="#e8762d"></rect><rect width="3" height="17" x="22" y="15" fill="#e8762d"></rect><rect width="2" height="14" x="11" y="6" fill="#ffa000"></rect><rect width="14" height="2" x="5" y="12" fill="#ffa000"></rect><rect width="2" height="14" x="34" y="6" fill="#607d8b"></rect><rect width="14" height="2" x="28" y="12" fill="#607d8b"></rect><rect width="2" height="14" x="11" y="27" fill="#c62828"></rect><rect width="14" height="2" x="5" y="33" fill="#c62828"></rect><rect width="2" height="14" x="34" y="27" fill="#0d47a1"></rect><rect width="14" height="2" x="28" y="33" fill="#0d47a1"></rect>
            </svg>
        },
        {
            name: "Excel",
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
            </svg>
        },
        {
            name: "R",
            icon: <img src={Rlogo} height={95} width={95} />
        },
        {
            name: "SAS",
            icon: <img src={sasLogo} height={95} width={95} />
        },
    ]
    
    return (
        <div id="about-container">
            <div className='about-header'>
                About Me
            </div>
            <div className='about-text-container'>
                <div className='about-text'>
                    <div className='about-text-header'>
                        Get to know me!
                    </div>
                    <div className='about-text-body'>
                    <p>
                        My name is Erik Blix and I&apos;m a junior at Elon University, majoring in Statistics and Computer Science 
                        with a minor in Economics. Originally from New Hampshire, I&apos;m passionate about 
                        both software engineering and data science.
                    </p>
                    <p>
                        I love the precision of coding and the insights statistics can uncover. My journey 
                        is all about exploring the intersection of technology and data, seeking innovative 
                        solutions, and contributing to data-driven decision-making.  
                    </p>
                    <p>
                        Check out my portfolio to see some of my projects. Let&apos;s connect and explore possibilities together!
                    </p>
                    </div>
                </div>
                <div className='about-skills'>
                    <div className='about-skills-header'>
                        Skills
                    </div>
                    <div className='skills-container'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='skill-item'>
                                <div className='skill-icon'>
                                    {skill.icon}
                                </div>
                                <div className='skill-name'>
                                    {skill.name}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;