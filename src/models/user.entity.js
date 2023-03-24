import { EntitySchema } from 'typeorm'

const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {primary: true, type: "int", generated: true},
        username: {type: 'varchar', nullable: false},
        email: {type: 'varchar', nullable: false},
        password: {type: 'varchar', nullable: false},
    }
})

export default User