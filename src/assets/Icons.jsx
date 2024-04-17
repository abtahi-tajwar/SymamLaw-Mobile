import * as React from "react";
import Svg, { Path, Mask, G, Defs, ClipPath } from "react-native-svg";
export const HomeIcon = ({ color = "#000000", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26 * scale}
    height={26 * scale}
    fill="none"
    {...props}
  >
    <Path
      scale={scale}
      stroke={color}
      d="M1 13.245c0-2.746 0-4.12.623-5.258S3.384 6.143 5.661 4.73l2.4-1.49C10.467 1.747 11.67 1 13 1c1.33 0 2.533.747 4.94 2.24l2.4 1.49c2.276 1.413 3.414 2.119 4.037 3.257C25 9.126 25 10.5 25 13.245v1.825c0 4.681 0 7.022-1.406 8.476C22.188 25 19.925 25 15.4 25h-4.8c-4.525 0-6.788 0-8.194-1.454C1 22.092 1 19.75 1 15.07v-1.825Z"
    />
  </Svg>
);

export const SearchIcon = ({ color = "#FCFFFD", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M21.546 10.773C21.546 4.828 16.718 0 10.773 0 4.828 0 0 4.828 0 10.773c0 5.945 4.828 10.773 10.773 10.773 2.693 0 5.147-.997 7.023-2.613L22.863 24 24 22.863l-5.067-5.067a10.732 10.732 0 0 0 2.613-7.023ZM10.773 19.95a9.178 9.178 0 0 1-9.177-9.177 9.178 9.178 0 0 1 9.177-9.177 9.178 9.178 0 0 1 9.177 9.177 9.178 9.178 0 0 1-9.177 9.177Z"
    />
    <Path
      fill={color}
      d="m4.908 5.965 1.237 1.018a5.954 5.954 0 0 1 4.628-2.195V3.192a7.608 7.608 0 0 0-5.865 2.773ZM3.192 10.773h1.596c0-.419.04-.818.12-1.217l-1.556-.32a7.87 7.87 0 0 0-.16 1.537Z"
    />
  </Svg>
);
export const PlayIconFilled = ({ color = "#FCFFFD", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm-1.568-7.385 5.664-3.344c.939-.554.939-1.988 0-2.542l-5.664-3.344C9.52 6.847 8.4 7.547 8.4 8.655v6.69c0 1.108 1.12 1.808 2.032 1.27Z"
      clipRule="evenodd"
    />
  </Svg>
);
export const SaveIconFilled = ({ color = "#FCFFFD", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M13.5 3.75a.75.75 0 1 1 1.5 0v3a.75.75 0 1 1-1.5 0v-3ZM6.75 9h10.5a.75.75 0 0 0 .75-.75V0H6v8.25c0 .415.336.75.75.75ZM21 0h-1.5v9a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 9V0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export const AccountIconFilled = ({
  color = "#FCFFFD",
  size = 24,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm0 3.6c1.992 0 3.6 1.608 3.6 3.6s-1.608 3.6-3.6 3.6a3.595 3.595 0 0 1-3.6-3.6c0-1.992 1.608-3.6 3.6-3.6Zm0 17.04a8.64 8.64 0 0 1-7.2-3.864c.036-2.388 4.8-3.696 7.2-3.696 2.388 0 7.164 1.308 7.2 3.696A8.64 8.64 0 0 1 12 20.64Z"
    />
  </Svg>
);
export const HamburgerIcon = ({
  color = "black",
  height = 19,
  width = 23,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M.457 2.09H14.18c.252 0 .457-.466.457-1.045C14.636.467 14.432 0 14.18 0H.457C.205 0 0 .467 0 1.045c0 .579.204 1.046.457 1.046ZM7.808 18.818H22.51c.27 0 .49-.467.49-1.045 0-.578-.22-1.046-.49-1.046H7.808c-.27 0-.49.468-.49 1.046 0 .578.22 1.045.49 1.045ZM.719 10.455H22.28c.397 0 .719-.468.719-1.046 0-.578-.322-1.045-.719-1.045H.72C.322 8.364 0 8.83 0 9.409c0 .578.321 1.046.719 1.046Z"
    />
  </Svg>
);
export const NotificationIcon = ({ color = "black", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.354 21c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H18.61c1.196 0 1.795 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936C18.78 13.206 18 11.09 18 8Z"
    />
  </Svg>
);
export const UserIcon = ({ color = "black", size = 26, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeWidth={2}
      d="M13 10.833a4.333 4.333 0 1 0 0-8.666 4.333 4.333 0 0 0 0 8.666Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.25 22.333c-.985.267-2.087.417-3.25.417-4.188 0-7.583-1.94-7.583-4.333 0-2.394 3.395-4.334 7.583-4.334 4.188 0 7.583 1.94 7.583 4.334 0 .374-.083.737-.239 1.083"
    />
  </Svg>
);
export const MyCoursesIcon = ({ color = "#000000", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M7.857 10H2.142C.962 10 0 9.04 0 7.857V2.143C0 .96.96 0 2.142 0h5.715C9.04 0 10 .96 10 2.143v5.714C10 9.04 9.04 10 7.857 10ZM2.142 2A.146.146 0 0 0 2 2.143v5.714c0 .076.066.143.142.143h5.715A.147.147 0 0 0 8 7.857V2.143A.147.147 0 0 0 7.857 2H2.142Zm5.715 22H2.142C.962 24 0 23.04 0 21.857v-5.715C0 14.962.96 14 2.142 14h5.715C9.04 14 10 14.96 10 16.143v5.715C10 23.038 9.04 24 7.857 24Zm-5.715-8a.145.145 0 0 0-.142.143v5.715c0 .076.066.142.142.142h5.715A.146.146 0 0 0 8 21.857v-5.715A.146.146 0 0 0 7.857 16H2.142Zm19.715 8h-5.715A2.143 2.143 0 0 1 14 21.857v-5.715C14 14.96 14.96 14 16.142 14h5.715C23.04 14 24 14.96 24 16.14v5.715A2.145 2.145 0 0 1 21.857 24Zm-5.715-8a.146.146 0 0 0-.143.143v5.715c0 .076.065.143.142.143h5.715a.145.145 0 0 0 .143-.142v-5.715a.146.146 0 0 0-.143-.143h-5.715l.001-.001Zm1.676-3.636c-.55 0-1.098-.208-1.516-.626l-4.04-4.04a2.142 2.142 0 0 1 0-3.03L16.3.625c.808-.808 2.225-.807 3.03 0l4.04 4.04a2.142 2.142 0 0 1 0 3.03l-4.04 4.04c-.418.42-.967.628-1.514.628l.002.001Zm0-10.364a.145.145 0 0 0-.102.04l-4.04 4.04a.145.145 0 0 0 0 .203l4.04 4.04a.143.143 0 0 0 .202 0l4.04-4.04a.144.144 0 0 0 0-.202l-4.04-4.04a.143.143 0 0 0-.1-.041Z"
    />
  </Svg>
);

export const CompletedExamsIcon = ({
  color = "#000000",
  size = 24,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M18.75 17.25v2.25H5.25v-6.877l2.692 2.684L9 14.25l-4.5-4.5-4.5 4.5 1.058 1.057 2.692-2.684V19.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-2.25h-1.5ZM20.25 5.25v6.877l2.692-2.684L24 10.5 19.5 15 15 10.5l1.058-1.057 2.692 2.684V5.25h-9v-1.5h9a1.5 1.5 0 0 1 1.5 1.5ZM6 7.5H3A1.5 1.5 0 0 1 1.5 6V3A1.5 1.5 0 0 1 3 1.5h3A1.5 1.5 0 0 1 7.5 3v3A1.5 1.5 0 0 1 6 7.5ZM3 3v3h3V3H3Z"
    />
  </Svg>
);

export const SettingsIcon = ({ color = "#000000", size = 25, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      d="M12.314 16.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
    />
    <Path
      stroke={color}
      d="M14.432 1.183C13.992 1 13.432 1 12.314 1c-1.118 0-1.678 0-2.119.183a2.4 2.4 0 0 0-1.298 1.299c-.112.268-.155.58-.172 1.036-.025.669-.368 1.288-.948 1.623-.58.335-1.288.322-1.88.01-.403-.213-.696-.332-.984-.37a2.4 2.4 0 0 0-1.774.476c-.379.29-.658.774-1.217 1.743-.56.968-.839 1.453-.901 1.926a2.4 2.4 0 0 0 .475 1.774c.177.23.425.424.811.667.567.356.932.963.932 1.633s-.365 1.277-.932 1.633c-.386.243-.634.436-.811.667a2.4 2.4 0 0 0-.475 1.774c.062.473.341.958.9 1.926.56.968.84 1.453 1.218 1.743a2.4 2.4 0 0 0 1.774.476c.288-.038.58-.157.983-.37.592-.313 1.3-.325 1.88.01.58.335.924.954.949 1.623.017.456.06.768.172 1.037a2.4 2.4 0 0 0 1.298 1.298c.441.183 1 .183 2.119.183 1.118 0 1.677 0 2.118-.183a2.4 2.4 0 0 0 1.3-1.299c.11-.268.154-.58.17-1.036.026-.669.37-1.288.95-1.623.579-.335 1.287-.323 1.88-.01.402.213.694.332.982.37a2.4 2.4 0 0 0 1.775-.476c.378-.29.658-.775 1.217-1.743.56-.968.839-1.453.901-1.926a2.4 2.4 0 0 0-.475-1.774c-.177-.23-.426-.425-.812-.667-.567-.356-.932-.963-.932-1.633s.365-1.277.932-1.633c.386-.243.635-.436.812-.667a2.4 2.4 0 0 0 .475-1.774c-.062-.473-.342-.958-.9-1.926-.56-.968-.84-1.453-1.218-1.743a2.4 2.4 0 0 0-1.775-.476c-.288.038-.58.157-.983.37-.592.313-1.3.325-1.88-.01-.58-.335-.923-.954-.948-1.623-.017-.456-.06-.768-.172-1.036a2.4 2.4 0 0 0-1.299-1.3Z"
    />
  </Svg>
);
export const SupportIcon = ({ color = "#000000", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M12 2a8 8 0 0 0-8 8v1.9A2.92 2.92 0 0 0 3 14a2.88 2.88 0 0 0 1.94 2.61C6.24 19.72 8.85 22 12 22h3v-2h-3c-2.26 0-4.31-1.7-5.34-4.39l-.21-.55-.59-.06a1 1 0 0 1-.725-1.497 1 1 0 0 1 .365-.363l.5-.29V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-4.09a1.5 1.5 0 1 0-1.52 2H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-2a8 8 0 0 0-8-8Z"
    />
  </Svg>
);
export const FAQIcon = ({ color = "#000000", size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M12 5.4c-1.659 0-3 1.341-3 3a.6.6 0 1 1-1.2 0c0-2.321 1.879-4.2 4.2-4.2s4.2 1.879 4.2 4.2a4.198 4.198 0 0 1-3.6 4.157V15.6a.6.6 0 0 1-1.2 0V12a.6.6 0 0 1 .6-.6c1.659 0 3-1.341 3-3s-1.341-3-3-3Zm0 14.244a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
    />
    <Path
      fill={color}
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM1.2 12C1.2 6.035 6.035 1.2 12 1.2c5.965 0 10.8 4.835 10.8 10.8 0 5.965-4.835 10.8-10.8 10.8-5.965 0-10.8-4.835-10.8-10.8Z"
    />
  </Svg>
);
export const LogoWithText = ({
  color = "#000000",
  secondaryColor = "gray",
  scale=1,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={138 * scale}
    height={151 * scale}
    fill="none"
    {...props}
  >
    <Path
      scale={scale}
      fill={color}
      d="M35.05 135.24c-1.487 0-2.735-.216-3.743-.648-.992-.448-1.752-1.024-2.28-1.728-.512-.72-.784-1.472-.816-2.256a.488.488 0 0 1 .504-.504h2.136c.208 0 .36.048.456.144.112.08.208.184.288.312.096.304.28.608.552.912.272.288.64.528 1.104.72.48.192 1.08.288 1.8.288 1.152 0 2.008-.192 2.568-.576.576-.384.864-.904.864-1.56 0-.464-.152-.832-.456-1.104-.304-.288-.776-.544-1.416-.768-.624-.24-1.456-.488-2.496-.744-1.2-.288-2.208-.632-3.024-1.032-.8-.416-1.408-.936-1.824-1.56-.4-.624-.6-1.416-.6-2.376 0-.928.248-1.752.744-2.472.512-.72 1.232-1.288 2.16-1.704.944-.416 2.064-.624 3.36-.624 1.04 0 1.96.144 2.76.432.8.272 1.464.64 1.992 1.104.528.448.928.936 1.2 1.464.288.512.44 1.016.456 1.512a.544.544 0 0 1-.144.36c-.08.096-.2.144-.36.144h-2.232a.852.852 0 0 1-.384-.096c-.128-.064-.232-.184-.312-.36-.096-.496-.408-.92-.936-1.272s-1.208-.528-2.04-.528c-.864 0-1.56.16-2.088.48-.528.32-.792.816-.792 1.488 0 .448.128.824.384 1.128.272.288.696.544 1.272.768.592.224 1.368.464 2.328.72 1.36.304 2.472.656 3.336 1.056.864.4 1.496.912 1.896 1.536.4.608.6 1.384.6 2.328 0 1.056-.288 1.96-.864 2.712-.56.736-1.352 1.304-2.376 1.704-1.024.4-2.216.6-3.576.6Zm13.423-.24a.555.555 0 0 1-.408-.168.555.555 0 0 1-.168-.408V129l-5.664-10.032a.931.931 0 0 1-.048-.12.488.488 0 0 1 .12-.504.46.46 0 0 1 .336-.144h2.136c.192 0 .344.048.456.144a.79.79 0 0 1 .264.312l4.08 6.984 4.056-6.984c.064-.112.152-.216.264-.312a.778.778 0 0 1 .48-.144h2.112a.488.488 0 0 1 .504.504.453.453 0 0 1-.024.144.163.163 0 0 1-.048.12L51.257 129v5.424c0 .16-.056.296-.168.408a.585.585 0 0 1-.432.168h-2.184Zm11.065 0a.585.585 0 0 1-.432-.168.555.555 0 0 1-.168-.408V118.8c0-.176.056-.32.168-.432a.585.585 0 0 1 .432-.168h1.896c.224 0 .392.064.504.192.112.112.184.2.216.264l4.632 8.64 4.68-8.64a1.19 1.19 0 0 1 .216-.264c.112-.128.28-.192.504-.192h1.872c.176 0 .32.056.432.168a.585.585 0 0 1 .168.432v15.624c0 .16-.056.296-.168.408a.585.585 0 0 1-.432.168h-2.016a.585.585 0 0 1-.432-.168.606.606 0 0 1-.144-.408v-10.392l-3.36 6.408c-.08.144-.184.272-.312.384-.128.096-.296.144-.504.144h-.984c-.224 0-.4-.048-.528-.144a1.723 1.723 0 0 1-.288-.384l-3.36-6.408v10.392c0 .16-.056.296-.168.408a.555.555 0 0 1-.408.168h-2.016Zm17.341 0a.544.544 0 0 1-.36-.144.488.488 0 0 1-.144-.36.59.59 0 0 1 .049-.216l5.783-15.48a.862.862 0 0 1 .265-.408c.144-.128.336-.192.576-.192h2.615c.24 0 .425.064.553.192.128.112.224.248.288.408l5.783 15.48c.016.08.024.152.024.216a.488.488 0 0 1-.144.36.46.46 0 0 1-.335.144h-2.088c-.225 0-.392-.048-.504-.144a.97.97 0 0 1-.192-.312l-1.129-2.928h-7.127l-1.129 2.928a.847.847 0 0 1-.215.312c-.096.096-.256.144-.48.144h-2.089Zm4.752-6.144h5.448l-2.735-7.416-2.712 7.416ZM94.672 135a.585.585 0 0 1-.432-.168.555.555 0 0 1-.168-.408V118.8c0-.176.056-.32.168-.432a.585.585 0 0 1 .432-.168h1.896c.224 0 .392.064.504.192.112.112.184.2.216.264l4.632 8.64 4.68-8.64a1.19 1.19 0 0 1 .216-.264c.112-.128.28-.192.504-.192h1.872c.176 0 .32.056.432.168a.585.585 0 0 1 .168.432v15.624c0 .16-.056.296-.168.408a.585.585 0 0 1-.432.168h-2.016a.585.585 0 0 1-.432-.168.606.606 0 0 1-.144-.408v-10.392l-3.36 6.408c-.08.144-.184.272-.312.384-.128.096-.296.144-.504.144h-.984c-.224 0-.4-.048-.528-.144a1.723 1.723 0 0 1-.288-.384l-3.36-6.408v10.392c0 .16-.056.296-.168.408a.555.555 0 0 1-.408.168h-2.016ZM58.595 148a.278.278 0 0 1-.204-.084.278.278 0 0 1-.084-.204v-7.824c0-.08.028-.148.084-.204a.278.278 0 0 1 .204-.084h1.116c.08 0 .148.028.204.084a.278.278 0 0 1 .084.204v6.684h3.804c.088 0 .16.028.216.084a.292.292 0 0 1 .084.216v.84c0 .08-.028.148-.084.204a.292.292 0 0 1-.216.084h-5.208Zm5.917 0a.272.272 0 0 1-.18-.072.244.244 0 0 1-.072-.18c0-.032.008-.068.024-.108l2.892-7.74a.418.418 0 0 1 .42-.3h1.308c.12 0 .212.032.276.096a.527.527 0 0 1 .144.204l2.892 7.74c.008.04.012.076.012.108a.244.244 0 0 1-.072.18.23.23 0 0 1-.168.072h-1.044c-.112 0-.196-.024-.252-.072a.485.485 0 0 1-.096-.156l-.564-1.464h-3.564l-.564 1.464a.423.423 0 0 1-.108.156c-.048.048-.128.072-.24.072h-1.044Zm2.376-3.072h2.724l-1.368-3.708-1.356 3.708Zm7.26 3.072a.418.418 0 0 1-.288-.096.589.589 0 0 1-.132-.264l-1.428-7.692a.134.134 0 0 0-.012-.06v-.036c0-.072.024-.132.072-.18a.272.272 0 0 1 .18-.072h1.056c.2 0 .312.08.336.24l.996 5.436 1.08-3.516a.633.633 0 0 1 .12-.192c.064-.072.156-.108.276-.108h.648c.128 0 .22.036.276.108a.469.469 0 0 1 .108.192l1.092 3.504.996-5.424c.024-.16.136-.24.336-.24h1.056a.23.23 0 0 1 .168.072.244.244 0 0 1 .072.18v.036a.197.197 0 0 1-.012.06l-1.428 7.692a.463.463 0 0 1-.132.264.418.418 0 0 1-.288.096h-.804a.418.418 0 0 1-.288-.096.525.525 0 0 1-.132-.204l-1.344-4.008-1.344 4.008a.68.68 0 0 1-.144.204c-.064.064-.16.096-.288.096h-.804Z"
    />
    <Path
      scale={scale}
      fill={secondaryColor}
      fillRule="evenodd"
      d="M69.704.733c-.061.058-.668.16-1.35.226-1.432.139-3.27 1.626-3.906 3.158-.566 1.367-.212 3.03 1.077 5.062 1.171 1.847 1.493 4.478.548 4.478-.281 0-.624.184-.763.409-.172.277-.093.312.244.109.423-.255.425-.21.013.297-.356.44-.953.577-2.252.521-1.544-.067-1.876.048-2.615.908-.484.562-1.023.876-1.256.732-.271-.168-.31-.095-.118.217.21.34.129.407-.295.244-.361-.138-.553-.06-.501.206.063.323-1.355.43-5.704.43-3.184 0-5.863-.12-5.953-.266-.343-.553-3.681-.278-4.365.36-1.088 1.012-1.486 2.463-1.079 3.929.197.71.36 1.718.36 2.242.001.524.187 1.067.412 1.206.258.16.312.097.147-.17-.19-.307.014-.363.742-.203.69.15.853.114.522-.12-.356-.25-.171-.376.708-.478 1.67-.193 2.688.025 2.038.436-.374.237-.307.314.275.319.582.004.829-.274 1.017-1.146.137-.633.54-1.726.895-2.428.567-1.121.85-1.306 2.308-1.506 2.915-.4 12.08-.262 13.085.197.512.233 1.234 1.018 1.605 1.745.637 1.249.675 2.36.692 20.235.01 10.403-.085 19.18-.21 19.505-.124.324-.361.59-.527.59-.84 0-3.25 2.845-4.024 4.75-.467 1.152-1.139 2.255-1.491 2.453-.354.198-2.294.376-4.313.396-3.171.032-3.719.126-4.034.689-.269.48-.237.73.12.954.266.166 8.213.267 17.66.223 17.107-.079 17.178-.082 17.283-.817.122-.859.26-.828-4.457-1.007-2.01-.076-3.863-.32-4.133-.544-.27-.224-.776-1.204-1.127-2.178-.454-1.263-1.249-2.348-2.773-3.787l-2.136-2.017-.062-18.362c-.065-19.531.006-20.5 1.63-22.245.752-.807.962-.833 7.61-.938l6.836-.108 1.072.902c.864.727 1.118 1.277 1.315 2.852.257 2.066.408 2.272 1.039 1.421.374-.505 3.266-.83 4.424-.496.345.1.613-.46.912-1.907.367-1.78.342-2.227-.191-3.419-.846-1.888-2.29-2.335-5.31-1.643-1.11.255-4.071.424-7.016.402l-5.095-.039-1.14-1.32c-1.036-1.196-1.306-1.319-2.924-1.319-2.638 0-3.455-.79-3.455-3.346 0-1.385.162-2.094.532-2.328.292-.184.39-.338.218-.341-.173-.003.074-.31.548-.684.62-.487.886-1.078.947-2.104.129-2.193-.68-3.704-2.537-4.742-.886-.495-1.662-.853-1.722-.795Zm-2.765 2.61c-1.521 1.567-1.707 2.353-.917 3.88 1.05 2.03 3.97 2.389 5.761.706.696-.654.835-1.103.772-2.493-.052-1.13-.234-1.696-.546-1.696-.257 0-.468-.248-.468-.552 0-.303-.146-.462-.324-.352-.178.11-.377.044-.442-.148-.066-.192-.637-.452-1.269-.578-1.018-.203-1.311-.062-2.567 1.232Zm5.825 36.7c0 7.206.047 10.105.105 6.44.058-3.666.058-9.563 0-13.104-.058-3.543-.105-.544-.105 6.663Zm12.147 6.226c-.543.595-2.12.902-3.678.715-.63-.075-.895 1.027-.302 1.255.288.11.436.342.329.514-.26.42 1.679 3.2 3.012 4.323 1.453 1.222 4.39 2.558 6.787 3.087 3.965.875 9.503-.941 12.606-4.134.837-.862 1.522-1.708 1.522-1.882 0-.173.27-.585.6-.915 1.143-1.142.844-1.845-.894-2.105-.873-.132-1.811-.462-2.083-.735-.426-.425-.623-.413-1.385.086-.731.48-1.99.59-7.151.625-7.39.05-8.787-.105-8.639-.965.127-.74.061-.728-.724.131Zm-49.626.399c.18.29-.753.402-2.436.291-.705-.046-.974.102-.974.536 0 .837 1.705 3.532 3.187 5.04 1.548 1.573 4.899 3.168 7.786 3.705 1.886.35 2.567.316 4.735-.237 3.306-.843 4.904-1.678 7.042-3.678 1.572-1.47 3.104-3.744 3.104-4.608 0-.177-.752-.407-1.67-.51-.92-.104-1.73-.364-1.801-.578-.161-.483-1.386-.515-1.547-.04-.183.54-14.929.645-15.574.11-.558-.462-2.135-.49-1.852-.031Z"
      clipRule="evenodd"
    />
    <Path
      scale={scale}
      fill={color}
      fillRule="evenodd"
      d="M67.452.225a.392.392 0 0 1-.535.138c-.43-.266-3.274 2.564-3.008 2.994.113.184.044.434-.154.557-.492.304-.453 2.76.062 3.971.232.545.75 1.362 1.151 1.816.502.568.73 1.314.73 2.39 0 1.017.155 1.566.442 1.566.877 0 .504-2.712-.615-4.477-1.29-2.033-1.643-3.696-1.077-5.063.636-1.533 2.474-3.02 3.906-3.157.682-.065 1.32-.136 1.416-.158.098-.02.867.322 1.71.763 1.779.93 2.612 2.509 2.483 4.705-.06 1.026-.327 1.617-.947 2.104-.474.373-.721.681-.549.684.173.003.075.157-.217.341-.37.234-.532.943-.532 2.328 0 2.556.817 3.346 3.455 3.346 1.618 0 1.888.123 2.923 1.32l1.14 1.319 5.096.039c2.945.022 5.905-.147 7.016-.402 3.02-.692 4.464-.245 5.31 1.643.533 1.192.558 1.64.19 3.42-.298 1.446-.566 2.005-.911 1.906-.874-.252-3.993-.039-4.328.296-.198.198.522.3 1.84.261 1.632-.048 2.225.067 2.405.468.13.293.222.62.204.728-.018.108.36 1.542.84 3.188.87 2.982.993 3.459 1.419 5.47.123.585.32 1.223.438 1.417.118.195.26.673.317 1.063.056.39.201.947.322 1.24.121.292.27.911.331 1.377.062.465.224 1.103.361 1.417.457 1.044.782 2.35.824 3.315.015.34.279.62.588.62.308 0 .494.199.413.442-.111.334-2.172.466-8.352.538-7.524.087-9.048-.064-7.886-.781.276-.171.872-2.193 1.272-4.318.07-.364.158-.663.198-.663.04 0 .124-.318.186-.708.15-.93.345-1.65.623-2.302.125-.292.273-.85.33-1.24.056-.39.197-.867.311-1.062.195-.331.97-3.387 1.134-4.473a3.02 3.02 0 0 1 .365-.952c.16-.256.197-.56.082-.676-.116-.115-.032-.423.184-.684.218-.262.276-.476.131-.476-.145 0-.105-.199.09-.442.368-.463.366-.589-.077-3.9-.221-1.655-.474-2.209-1.343-2.94l-1.072-.902-6.837.108c-6.647.105-6.857.13-7.609.938-1.624 1.745-1.695 2.714-1.63 22.245l.062 18.362 2.136 2.017c1.524 1.439 2.319 2.525 2.773 3.788.35.973.857 1.953 1.127 2.177.27.224 2.123.468 4.133.544 4.716.18 4.58.148 4.457 1.007-.105.735-.176.738-17.283.817-9.447.044-17.394-.057-17.66-.223-.357-.224-.389-.474-.12-.954.315-.563.863-.657 4.034-.689 2.02-.02 3.96-.198 4.312-.396.353-.197 1.025-1.301 1.492-2.453.774-1.905 3.183-4.75 4.024-4.75.166 0 .403-.266.528-.59.124-.325.218-9.102.209-19.505-.017-17.876-.055-18.986-.692-20.235-.989-1.939-1.816-2.17-7.781-2.17-7.29 0-8.43.19-9.114 1.513-.991 1.917-1.622 4.52-1.214 5.01.204.247.271.55.148.674-.124.123-.044.442.177.708.22.266.3.585.177.708-.124.123-.056.428.15.676.206.248.374.573.374.722 0 .951.53 3.124.805 3.293.181.112.25.333.153.49-.097.157.073 1.129.38 2.16.404 1.36.642 1.736.873 1.371.203-.32.32-.349.323-.08.003.232-.147.516-.333.631-.325.201-.29.512.215 1.87.127.34.289.938.36 1.328.072.39.395 1.584.719 2.656.323 1.071.6 2.105.613 2.297.014.192.344.41.734.484.39.074.808.292.93.486.122.193.959.434 1.86.536.9.102 1.637.33 1.637.507 0 .864-1.532 3.138-3.104 4.608-2.138 2-3.736 2.835-7.043 3.678-2.167.553-2.848.587-4.734.236-4.496-.836-7.836-3.025-10-6.554-1.407-2.297-1.31-2.718.619-2.679.875.018 1.837-.171 2.137-.42.433-.36.711-.364 1.354-.02 1.262.676 15.813.701 15.813.028 0-.225-2.843-.354-7.819-.354h-7.818l.097-1.151c.053-.633.23-1.333.393-1.557.163-.222.266-.541.228-.708-.038-.166.025-.542.14-.834.338-.857 1.377-4.696 1.483-5.479.054-.395.197-.958.318-1.25a7.4 7.4 0 0 0 .347-1.24c.07-.39.24-.965.377-1.278.138-.314.3-.952.361-1.417.061-.466.22-1.103.354-1.416.134-.314.284-.959.335-1.432.05-.474.21-1.054.356-1.29.145-.235.173-.575.06-.757-.111-.181-.044-.428.15-.547.212-.132.23-.459.045-.822-.17-.332-.478-1.527-.686-2.657-.64-3.474.495-5.207 3.413-5.207.95 0 1.833.107 1.963.237.13.13 2.709.29 5.731.358 5.955.133 6.437.015 8.187-2.001.642-.74 1.036-.864 2.528-.799 1.132.05 1.91-.095 2.164-.4.325-.391-.051-.466-2.13-.42-2.173.047-2.619.169-3.187.871-.364.449-.661 1.038-.661 1.308 0 .271-.12.496-.266.5-5 .145-11.83-.034-12.596-.33-2.276-.881-4.77-.122-5.735 1.745-.3.581-.443 1.056-.317 1.056s.037.232-.198.516c-.236.284-.324.685-.196.892.584.946.876 3.821.467 4.613-.332.642-3.106 10.793-3.291 12.042-.073.487-.167.965-.21 1.062a3.21 3.21 0 0 0-.147.532 5.577 5.577 0 0 1-.297.885c-.124.292-.297.93-.382 1.417-.085.487-.187.885-.226.885-.04 0-.123.319-.186.709-.156.967-.348 1.66-.659 2.373-.143.332-.182.73-.086.886.097.155-.925.23-2.27.165-2.76-.133-2.83-.045-1.782 2.242 2.534 5.534 8.036 8.812 14.306 8.524 5.934-.272 10.107-2.965 12.781-8.247.514-1.016.936-2.012.936-2.213 0-.214-.95-.366-2.289-.366H54.57l-.387-1.505c-.722-2.809-1.444-5.4-1.652-5.932-.114-.293-.254-.88-.311-1.308-.11-.815-2.173-8.401-2.535-9.317a6.366 6.366 0 0 1-.278-.886 12.735 12.735 0 0 0-.164-.708 8.912 8.912 0 0 1-.153-.709 28.27 28.27 0 0 0-.325-1.432c-.178-.716-.084-1.52.28-2.39l.549-1.313h14.493l.717 1.574c.691 1.517.718 2.253.718 20.191 0 18.602-.001 18.617-.76 19.233-3.207 2.605-4.111 3.8-4.686 6.195l-.235.974h-9.194v3.541h36.833v-3.541h-9.13l-.225-1.2c-.311-1.66-1.85-3.831-3.782-5.334l-1.626-1.266-.03-18.705c-.026-15.51.054-18.853.469-19.565.275-.471.598-1.127.719-1.457.292-.8.682-.834 8.358-.714l6.618.104.413 1.25c.432 1.31.22 3.765-.47 5.45-.267.652-1.037 3.524-1.14 4.25-.04.291-.24.939-.444 1.438-.204.499-.42 1.375-.48 1.948-.06.572-.248 1.233-.418 1.467-.17.236-.214.583-.097.773a.398.398 0 0 1-.115.549c-.267.165-.849 2.516-.79 3.198.007.097-.22.736-.506 1.42-.286.684-.522 1.324-.524 1.421-.003.098-.1.65-.215 1.227-.205 1.028-.259 1.052-2.648 1.153l-2.439.103 1.056 2.229c1.808 3.82 5.364 6.825 9.542 8.066 1.918.57 7.04.443 8.84-.218 3.656-1.341 7.026-4.395 8.654-7.841.523-1.109.951-2.105.951-2.214 0-.11-1.004-.199-2.231-.199-2.242 0-3.174-.408-2.852-1.247.095-.249.01-.553-.189-.676-.2-.124-.28-.442-.178-.709.102-.266.023-.585-.177-.708-.199-.123-.279-.442-.177-.708.102-.267.013-.591-.198-.722-.212-.13-.299-.375-.196-.542.104-.168.034-.401-.155-.519-.19-.117-.261-.43-.159-.697.102-.266.013-.59-.198-.721-.212-.13-.301-.372-.199-.537.102-.165-.001-.752-.229-1.304-.227-.552-.392-1.11-.366-1.239.048-.24-.865-3.584-1.24-4.546a5.583 5.583 0 0 1-.28-1.062c-.04-.293-.43-1.807-.865-3.365-.706-2.52-.747-3.035-.363-4.655.52-2.197.281-3.326-1-4.739-1.016-1.12-3.394-1.742-4.609-1.206a9.564 9.564 0 0 1-.873.343c-.146.041-.385.112-.531.158-.669.21-11.422.155-11.422-.058 0-.132-.518-.774-1.151-1.426-1.067-1.099-1.314-1.185-3.364-1.177l-2.213.01v-1.842c-.001-1.436.222-2.176 1.013-3.364 1.205-1.81 1.5-3.136 1.057-4.743-.362-1.308-1.763-3.143-2.844-3.72-.94-.504-4.118-.716-4.38-.294Zm-.513 3.118c-1.521 1.567-1.707 2.353-.917 3.88 1.05 2.03 3.97 2.389 5.761.706.696-.653.835-1.103.772-2.493-.052-1.13-.234-1.696-.546-1.696-.257 0-.468-.248-.468-.552 0-.303-.146-.462-.324-.352-.178.11-.377.044-.442-.148-.066-.192-.637-.452-1.269-.578-1.018-.203-1.311-.062-2.567 1.233Zm1.05-.066c-1.792 1.224-2.073 2.87-.71 4.16 1.472 1.391 3.015 1.252 4.077-.369 1.466-2.238-1.218-5.26-3.367-3.791ZM20.896 51.209c0 23.225.093 29.433.442 29.528.244.067 2.855.621 5.803 1.232 8.323 1.723 14.73 4.073 21.531 7.895 2.313 1.299.915 1.099-2.76-.396-7.934-3.229-16.428-5.205-25.29-5.882-1.806-.138-3.347-.355-3.425-.48-.078-.127-.326-1.58-.55-3.23-1.596-11.719-5.025-27.041-8.103-36.204l-1.755-5.224h9.857V33.49H8.323c-4.578 0-8.323.089-8.323.197 0 .109.632 2.096 1.405 4.416 4.254 12.77 8.697 30.998 10.658 43.73.24 1.559.615 3.71.834 4.782l.399 1.948 5.128.223c5.942.259 10.208.77 14.69 1.76 12.257 2.71 22.245 7.032 32.793 14.191 1.673 1.136 3.127 2.065 3.23 2.065.104 0 2.201-1.344 4.662-2.987 5.093-3.401 13.246-7.597 18.461-9.499 9.547-3.483 17.704-5.127 27.422-5.528l5.463-.225 1.125-6.73c2.632-15.731 6.512-31.522 11.001-44.766.488-1.442.809-2.828.712-3.08-.138-.361-1.911-.445-8.252-.39l-8.075.07v4.604l4.869.099c2.679.054 4.87.213 4.87.354 0 .14-.319 1.094-.708 2.118-1.812 4.768-4.549 14.777-6.172 22.575-1.148 5.514-3.036 16.81-3.036 18.162 0 .58-.199 1.211-.443 1.405-.243.193-1.877.456-3.63.585-4.799.352-11.554 1.557-16.115 2.873-4.931 1.424-10.14 3.29-10.726 3.841-.458.431-1.67.74-1.67.425 0-.806 7.731-4.583 12.75-6.23 3.336-1.093 11.63-3.129 14.698-3.606.7-.109.711-.452.886-29.324.097-16.068.135-29.321.084-29.452-.05-.131-2.678 1.002-5.839 2.518l-5.746 2.756-.115 2.351c-.063 1.294-.032 2.352.069 2.352s1.864-.786 3.918-1.747c2.053-.962 3.748-1.639 3.766-1.506.019.134.022 11.073.007 24.309-.022 19.05-.121 24.115-.477 24.304-.246.132-1.771.428-3.386.66-10.64 1.52-23.366 7.462-35.233 16.45a2835.669 2835.669 0 0 1-4.71 3.562c-.306.229-.816.034-1.626-.62-12.918-10.436-26.747-17.323-38.837-19.343-2.206-.368-4.119-.778-4.25-.91-.186-.186-.38-48.7-.194-48.7.18 0 3.05 1.285 5.151 2.308 1.395.678 2.676 1.233 2.848 1.233.171 0 .264-.995.207-2.213l-.106-2.214-5.666-2.896c-3.117-1.592-5.786-2.907-5.933-2.922-.146-.014-.265 13.208-.265 29.381ZM44.27 24.274c-.972.153-1.1.251-.591.456.858.344 2.07.321 2.657-.05.675-.428-.482-.655-2.066-.406Zm57.067 22.26c-.695.46-2.079.555-8.062.551-4.929-.003-7.352-.133-7.627-.408-.268-.268-.614-.291-1.027-.07-.343.183-1.347.36-2.232.394-1.613.061-2.52.83-1.46 1.238.288.11.437.342.33.514-.26.42 1.679 3.2 3.012 4.323 1.453 1.222 4.39 2.558 6.787 3.087 3.965.875 9.503-.941 12.606-4.134.837-.862 1.522-1.708 1.522-1.882 0-.173.27-.585.6-.915 1.177-1.177.85-1.858-1.015-2.115-.941-.13-1.71-.362-1.71-.518 0-.572-.909-.607-1.724-.066Z"
      clipRule="evenodd"
    />
  </Svg>
);
export const CaretLeftIcon = ({ color = "#000000", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      d="m8.531 1-7.2 7.2a1.131 1.131 0 0 0 0 1.6l7.2 7.2"
    />
  </Svg>
);
export const SpeakerIcon = ({ color = "#000000", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12 * scale}
    height={10 * scale}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      scale={scale}
      d="M7.015 6.275c-.893-.282-.639-.506.213-.826.409-.154.16-.478.171-.737.005-.119.472-.095.438-.553-.024-.322-.734-.781-.927-.977-.112-.113.228-.423-.011-.695-.327-.372-.378-1.019-.576-1.38 0 0 .15-.23.035-.362C5.363-.38 1.648-.278.7 1.38-.366 3.242-.38 5.815 1.835 7.2c.985.617-.277 2.8-.277 2.8h3.908c0-.373-.436-1.71.327-1.65.662.052 1.474.024 1.402-.725-.022-.225-.047-.429.11-.616.158-.187.386-.52-.29-.734ZM7.91 5.924l3.628.475v-.95l-3.629.475ZM10.858 9.054l.389-.823-3.338-1.802 2.949 2.625ZM11.247 3.609l-.39-.824L7.91 5.411l3.338-1.802Z"
    />
  </Svg>
);
export const DateIcon = ({ color = "#000000", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11 * scale}
    height={12 * scale}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      scale={scale}
      strokeLinecap="round"
      d="M9.889 4.889V3.222c0-.613-.498-1.11-1.111-1.11H2.11C1.497 2.111 1 2.608 1 3.221V4.89m8.889 0v5c0 .614-.498 1.111-1.111 1.111H2.11A1.111 1.111 0 0 1 1 9.889v-5m8.889 0H1M3.222 1v2.222M7.667 1v2.222"
    />
  </Svg>
);
export const RegisterIcon = ({ color = "#000000", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10 * scale}
    height={10 * scale}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)" scale={scale}>
      <Path
        fill={color}
        d="M7.188 8.125a.312.312 0 0 0-.313.313v.937H.625v-7.5h1.25v.313a.312.312 0 0 0 .313.312h3.124a.312.312 0 0 0 .313-.313v-.312h1.25v.313a.312.312 0 1 0 .625 0v-.626a.312.312 0 0 0-.313-.312H5.625V.937A.937.937 0 0 0 4.687 0H2.813a.937.937 0 0 0-.937.938v.312H.312A.312.312 0 0 0 0 1.563v8.124A.312.312 0 0 0 .313 10h6.875a.312.312 0 0 0 .312-.313v-1.25a.312.312 0 0 0-.313-.312ZM2.5.937a.312.312 0 0 1 .313-.312h1.874A.312.312 0 0 1 5 .938v.937H2.5V.937Zm7.409 2.904-1.25-1.25a.312.312 0 0 0-.443 0l-3.75 3.75a.312.312 0 0 0-.091.221v1.25a.312.312 0 0 0 .313.313h1.25a.313.313 0 0 0 .22-.091l3.75-3.75a.313.313 0 0 0 0-.443ZM5 7.5v-.808l3.438-3.438.808.808L5.808 7.5H5Zm-1.25.313a.312.312 0 0 1-.313.312h-1.25a.312.312 0 1 1 0-.625h1.25a.312.312 0 0 1 .313.313Zm0-1.875a.312.312 0 0 1-.313.312h-1.25a.312.312 0 1 1 0-.625h1.25a.312.312 0 0 1 .313.313Zm1.563-1.563H2.188a.312.312 0 1 1 0-.625h3.124a.312.312 0 1 1 0 .625Z"
      />
    </G>
    <Defs>
      <ClipPath id="a" scale={scale}>
        <Path fill={color} d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const ClockIcon = ({ color = "#000000", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16 * scale}
    height={16 * scale}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      scale={scale}
      d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1.6A6.4 6.4 0 1 0 8 1.6a6.4 6.4 0 0 0 0 12.8Zm-.8-6.072V3.2h1.6v4.472l3.16 3.16-1.128 1.128L7.2 8.328Z"
    />
  </Svg>
);
export const ExamIcon = ({ color = "#ffffff", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24 * scale}
    height={24 * scale}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      scale={scale}
      d="M18.783 1.043a1.043 1.043 0 0 1 2.087 0v.612L22.196.329a1.043 1.043 0 1 1 1.475 1.475L22.345 3.13h.611a1.043 1.043 0 1 1 0 2.087h-2.698l-8.047 8.048a1.043 1.043 0 0 1-1.476-1.476l8.048-8.047V1.043Z"
    />
    <Path
      fill={color}
      scale={scale}
      d="M17.105 3.954c.46-.46.392-1.23-.182-1.54a11.427 11.427 0 0 0-5.445-1.37C5.14 1.043 0 6.181 0 12.521 0 18.86 5.139 24 11.478 24c6.34 0 11.478-5.139 11.478-11.478 0-1.967-.494-3.818-1.366-5.436-.309-.574-1.078-.643-1.539-.182l-.031.03c-.345.345-.4.88-.177 1.314a9.352 9.352 0 0 1 1.027 4.274 9.391 9.391 0 1 1-18.783 0 9.391 9.391 0 0 1 9.391-9.392c1.543 0 2.998.372 4.282 1.031.434.223.97.169 1.314-.176l.031-.031Z"
    />
    <Path
      fill={color}
      scale={scale}
      d="M13.972 7.087c.493-.493.37-1.324-.296-1.533a7.304 7.304 0 1 0 4.774 4.782c-.209-.667-1.04-.791-1.534-.298l-.096.096c-.293.294-.375.731-.276 1.134a5.217 5.217 0 1 1-3.803-3.81c.403.1.841.018 1.135-.275l.096-.096Z"
    />
    <Path
      fill={color}
      scale={scale}
      d="M10.516 9.55c.427-.143.642.35.324.67l-.84.84a2.084 2.084 0 1 0 2.947 2.948l.83-.83c.32-.32.813-.103.668.324-.42 1.233-1.596 2.15-2.967 2.15a3.13 3.13 0 0 1-3.13-3.13c0-1.378.927-2.559 2.168-2.973Z"
    />
  </Svg>
);
export const CaretRightIcon = ({ color = "#ffffff", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={5 * scale}
    height={8 * scale}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={0.5}
      d="m1 .464 3.182 3.182a.5.5 0 0 1 0 .708L1 7.536"
    />
  </Svg>
);
export const BackgroundDesignBlock = ({
  color = "#FCE9B5",
  scale = 1,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={146 * scale}
    height={146 * scale}
    fill="none"
    {...props}
  >
    <Path
      scale={scale}
      fill={color}
      d="M24.333 48.667C10.899 48.667 0 37.772 0 24.333 0 10.893 10.9 0 24.333 0c13.438 0 24.333 10.895 24.333 24.333 0 13.438 10.897 24.334 24.334 24.334 13.438 0 24.333-10.895 24.333-24.333C97.333 10.897 108.23 0 121.668 0c13.437 0 24.333 10.895 24.333 24.333 0 13.438-10.896 24.333-24.333 24.333-40.322 0-73 32.693-73 72.999 0 13.431-10.896 24.333-24.334 24.333C10.897 145.998 0 135.105 0 121.668c0-13.438 10.895-24.335 24.333-24.335 13.438 0 24.33-10.895 24.33-24.333 0-13.437-10.89-24.333-24.33-24.333Z"
      opacity={0.5}
    />
    <Path
      scale={scale}
      fill={color}
      d="M66.917 106.456c0-21.85 17.7-39.542 39.543-39.542 21.844.001 39.541 17.691 39.541 39.542 0 21.84-17.697 39.543-39.544 39.543-21.843 0-39.54-17.703-39.54-39.543Z"
      opacity={0.4}
    />
  </Svg>
);
export const GoogleIcon = ({ color = "#fff", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20 * scale}
    height={20 * scale}
    fill="none"
    {...props}
  >
    <Path
      scale={scale}
      fill={color}
      d="M10.002 20C4.487 20 0 15.515 0 10S4.487 0 10.002 0a9.98 9.98 0 0 1 6.735 2.607l.337.307-3.299 3.299-.305-.262a5.338 5.338 0 0 0-3.468-1.286A5.342 5.342 0 0 0 4.665 10a5.342 5.342 0 0 0 5.337 5.335c2.121 0 3.797-1.084 4.587-2.93H9.567V7.903l9.805.013.073.345c.51 2.427.102 5.997-1.97 8.551C15.758 18.927 13.244 20 10.002 20Z"
    />
  </Svg>
)

export const FacebookIcon = ({ color = "#fff", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21 * scale}
    height={20 * scale}
    fill="none"
    {...props}
  >
    <Path
      scale={scale}
      fill={color}
      d="M10.051 0C4.501 0 0 4.5 0 10.051c0 5.04 3.712 9.2 8.55 9.928v-7.263H6.061v-2.643H8.55V8.315c0-2.91 1.418-4.188 3.838-4.188 1.158 0 1.77.085 2.061.125v2.306h-1.65c-1.027 0-1.386.974-1.386 2.071v1.444h3.01l-.409 2.643h-2.601V20c4.906-.666 8.69-4.86 8.69-9.949 0-5.55-4.5-10.051-10.05-10.051Z"
    />
  </Svg>
)

export const CameraIcon = ({ color = "#fff", scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21 * scale}
    height={21 * scale}
    fill="none"
    {...props}
  >
    <Path
      scale={scale}
      fill={color}
      d="M10.45 15.16c1.07 0 1.98-.375 2.73-1.124.75-.75 1.125-1.66 1.125-2.731s-.375-1.982-1.124-2.732c-.75-.749-1.66-1.123-2.731-1.123s-1.982.374-2.731 1.123c-.75.75-1.124 1.66-1.124 2.732 0 1.07.374 1.98 1.124 2.73.75.75 1.66 1.125 2.73 1.125Zm-.943-4.798.557-1.2a.386.386 0 0 1 .386-.256c.185 0 .314.086.385.257l.557 1.2 1.2.556c.17.072.256.2.256.386a.386.386 0 0 1-.257.385l-1.199.557-.557 1.2a.386.386 0 0 1-.385.256.386.386 0 0 1-.386-.257l-.557-1.2-1.2-.556a.386.386 0 0 1-.256-.385c0-.186.086-.314.257-.386l1.2-.557Zm-5.91 7.796c-.472 0-.875-.168-1.21-.503a1.65 1.65 0 0 1-.504-1.21V6.165c0-.472.168-.875.504-1.21a1.648 1.648 0 0 1 1.21-.504h2.698l1.07-1.156c.158-.186.347-.325.568-.418a1.79 1.79 0 0 1 .696-.14h3.641c.243 0 .475.047.697.14.22.093.41.232.567.418l1.07 1.156h2.699c.471 0 .875.168 1.21.504.336.335.503.738.503 1.21v10.28c0 .47-.167.874-.502 1.21-.336.335-.74.503-1.211.503H3.596Z"
    />
  </Svg>
)

export const CrossIcon = ({ color = '#fff', scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14 * scale}
    height={14 * scale}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      scale={scale}
      d="M.927.927a.991.991 0 0 1 1.401 0L7 5.598 11.672.927a.991.991 0 0 1 1.402 1.401L8.402 7l4.672 4.672a.991.991 0 0 1-1.402 1.401L7 8.401l-4.672 4.672a.991.991 0 0 1-1.401-1.401L5.598 7 .927 2.328a.991.991 0 0 1 0-1.401Z"
    />
  </Svg>
)

export const DeleteIcon = ({ color = '#fff', scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19 * scale}
    height={21 * scale}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      scale={scale}
      fillRule="evenodd"
      d="M7.13 2.044H2.017a1.51 1.51 0 0 0-1.073.449 1.54 1.54 0 0 0 0 2.168c.284.287.67.449 1.073.449h.76v13.286c0 .542.213 1.062.592 1.445.38.383.895.599 1.432.599h9.615c.537 0 1.051-.216 1.43-.599.38-.383.594-.903.594-1.445V5.11h.76c.402 0 .788-.162 1.072-.45a1.541 1.541 0 0 0 0-2.167 1.511 1.511 0 0 0-1.073-.449H12.09a2.56 2.56 0 0 0-.88-1.468 2.516 2.516 0 0 0-3.2 0 2.56 2.56 0 0 0-.88 1.468Zm8.299 3.066v13.286c0 .271-.107.53-.297.723-.19.191-.447.299-.715.299H4.802c-.269 0-.526-.108-.716-.3a1.028 1.028 0 0 1-.297-.722V5.11h11.64ZM9.103 7.665v9.198c0 .136.053.265.148.361a.503.503 0 0 0 .864-.361V7.665a.513.513 0 0 0-.148-.361.504.504 0 0 0-.864.361Zm-3.542 0v9.198c0 .136.053.265.148.361a.503.503 0 0 0 .864-.361V7.665a.514.514 0 0 0-.148-.361.504.504 0 0 0-.864.361Zm7.085 0v9.198c0 .136.053.265.148.361a.503.503 0 0 0 .864-.361V7.665a.514.514 0 0 0-.149-.361.504.504 0 0 0-.864.361ZM17.2 4.088H2.018a.506.506 0 0 1-.506-.511c0-.136.054-.265.148-.361a.504.504 0 0 1 .358-.15H17.2c.134 0 .263.054.358.15a.514.514 0 0 1-.358.872Zm-6.16-2.044a1.532 1.532 0 0 0-.554-.74 1.509 1.509 0 0 0-1.754 0c-.256.182-.45.441-.555.74h2.864Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const GalleryIcon = ({ color = '#fff', scale = 1, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29 * scale}
    height={26 * scale}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      scale={scale}
      strokeLinecap="round"
      d="M27.517 14.586c0 4.91 0 7.364-1.525 8.889C24.467 25 22.012 25 17.103 25h-5.206c-4.91 0-7.364 0-8.889-1.525-1.525-1.525-1.525-3.98-1.525-8.889 0-4.909 0-7.363 1.525-8.888 1.525-1.525 3.98-1.525 8.889-1.525h5.207c4.908 0 7.363 0 8.888 1.525.864.864 1.238 2.026 1.4 3.763"
    />
    <Path
      scale={scale}
      stroke={color}
      d="M4.07 4.905c.147-1.212.452-2.05 1.09-2.685C6.385 1 8.355 1 12.296 1h4.18c3.941 0 5.912 0 7.136 1.22.638.636.943 1.473 1.09 2.685M21.66 11.983a1.953 1.953 0 1 0 0-3.905 1.953 1.953 0 0 0 0 3.905Z"
    />
    <Path
      scale={scale}
      stroke={color}
      strokeLinecap="round"
      d="m1.483 15.237 2.28-1.995a2.994 2.994 0 0 1 4.089.137l5.584 5.583a2.603 2.603 0 0 0 3.337.29l.389-.273a3.905 3.905 0 0 1 4.857.292l4.196 3.777"
    />
  </Svg>
)