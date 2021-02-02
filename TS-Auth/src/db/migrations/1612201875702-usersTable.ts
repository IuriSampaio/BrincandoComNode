import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class usersTable1612201875702 implements MigrationInterface {

    private table = new Table({
        name: "users",
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                isUnique: true,
            },
            {
                name: "name",
                type: "varchar",
                isUnique: true
            },
            {
                name: "email",
                type: "varchar",
                isUnique: true
            },
            {
                name: "password",
                type: "varchar",
            }
        ],
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
    }

}
