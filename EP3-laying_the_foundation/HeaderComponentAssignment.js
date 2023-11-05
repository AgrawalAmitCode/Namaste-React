/**
 *
 * Crate a Header Component from scratch using Functional Components with JSX
 * Add Logo on left
 * Add a Search bar in middle
 * Add User icon on right
 * Add CSS to make it look nice
 *
 */

const LogoComponent = () => (
  <img
    src="https://namastedev.com/images/reel.png"
    style={{ objectFit: "fill" }}
  />
);

const SearchBarComponent = () => (
  <input
    type="search"
    placeholder="Search the course"
    style={{ width: "100%", height: "30px", borderRadius: "6px" }}
  />
);

const UserIconComponent = () => (
  <img
    style={{ objectFit: "fill", backgroundImage:'none', }}
    src="https://static.vecteezy.com/system/resources/thumbnails/019/896/008/small_2x/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
  />
);

export const HeaderCoomponentAssignment = () => (
  <div
    id="header"
    style={{
      height: "50px",
      padding: "4px",
      display: "flex",
      backgroundColor:'whitesmoke',
      justifyContent: "space-between",
    }}
  >
    <LogoComponent />
    <div
      style={{
        display: "flex",
        width: "20%",
        alignItems: "center",
      }}
    >
      <SearchBarComponent />
    </div>

    <UserIconComponent />
  </div>
);
