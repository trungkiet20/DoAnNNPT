const sequelize = require('./server/config/db');
const Role = require('./server/models/Role');

async function seed() {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    // Sync to ensure table exists (it should, but safety first)
    await Role.sync();

    const roles = ['Admin', 'Landlord', 'Tenant'];
    const roleMap = {};
    for (const name of roles) {
      const [role, created] = await Role.findOrCreate({ where: { name } });
      roleMap[name] = role.id;
      if (created) {
        console.log(`Role ${name} created.`);
      } else {
        console.log(`Role ${name} already exists.`);
      }
    }

    // Create Admin user
    const User = require('./server/models/User');
    const bcrypt = require('bcryptjs');
    const adminEmail = 'admin@example.com';
    const adminPass = 'admin123';
    const hashedPass = await bcrypt.hash(adminPass, 10);

    const [adminUser, adminCreated] = await User.findOrCreate({
      where: { email: adminEmail },
      defaults: {
        username: 'admin',
        password: hashedPass,
        roleId: roleMap['Admin']
      }
    });

    if (adminCreated) {
      console.log(`Admin user created: ${adminEmail} / ${adminPass}`);
    } else {
      console.log(`Admin user already exists.`);
    }

    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();
