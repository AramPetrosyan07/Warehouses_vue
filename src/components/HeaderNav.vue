<template>
  <div class="container">
    <div class="header-nav">
      <div class="header-left">
        <div class="places-divider">
          <p class="body1 medium dark-blue-40">Places</p>
          <p style="margin: 0">➡️</p>
        </div>
        <div class="warehouses-divider">
          <p class="h2 medium" style="margin: 0">Warehouses</p>
          <div class="warehouses-count">
            <p class="body1 medium dark-blue-40" style="margin: 0">200</p>
          </div>
        </div>
      </div>

      <div class="header-right">
        <div class="languages">
          <p class="body1 medium" style="margin: 0">🌐 EN</p>
        </div>
        <p style="margin: 0 16px; position: relative">
          🔔
          <span
            style="
              position: absolute;
              top: -5px;
              right: -5px;
              width: 10px;
              height: 10px;
              background-color: red;
              border-radius: 50%;
            "
          ></span>
        </p>
        <div class="user-profile-actions">
          <div class="super-admin">
            <p class="body1 medium" style="margin: 0">Super admin</p>
          </div>
          <div class="disjunctive-line"></div>
          <div class="logout">
            <p class="body1 medium dark-blue-40" style="margin: 0">Logout</p>
            <p style="margin: 0">🚪</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style lang="scss" scoped>
.container {
  border-bottom: 1px solid #ccc; /* replace with your $gray-30 */

  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 11px 24px;

    .header-left,
    .header-right {
      display: flex;
      align-items: center;
    }

    .header-left {
      gap: 8px;

      .places-divider {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .warehouses-divider {
        display: flex;
        align-items: center;
        gap: 6px;

        .warehouses-count {
          width: 50px;
          height: 28px;
          background-color: #ccc; /* replace with your $gray-30 */
          border-radius: 4px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .header-right {
      display: flex;
      gap: clamp(15px, 1vw, 40px);

      .user-profile-actions {
        display: flex;
        align-items: center;
        gap: 16px;

        .disjunctive-line {
          width: 1px;
          height: 21px;
          background-color: #ccc; /* replace with your $gray-30 */
        }

        .logout {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      }
    }

    .dark-blue-40 {
      color: #2c3e50; /* replace with your $dark-blue-40 */
    }

    .body1 {
      font-size: 14px;
    }

    .h2 {
      font-size: 24px;
    }

    .medium {
      font-weight: 500;
    }
  }
}
</style>
