using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace spa_multiplayer_game.Data.Migrations
{
    /// <inheritdoc />
    public partial class ModifyGameTableAttempts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Attempt1",
                table: "GameModel");

            migrationBuilder.DropColumn(
                name: "Attempt2",
                table: "GameModel");

            migrationBuilder.DropColumn(
                name: "Attempt3",
                table: "GameModel");

            migrationBuilder.DropColumn(
                name: "Attempt4",
                table: "GameModel");

            migrationBuilder.DropColumn(
                name: "Attempt5",
                table: "GameModel");

            migrationBuilder.RenameColumn(
                name: "Attempt6",
                table: "GameModel",
                newName: "Attempts");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Attempts",
                table: "GameModel",
                newName: "Attempt6");

            migrationBuilder.AddColumn<string>(
                name: "Attempt1",
                table: "GameModel",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attempt2",
                table: "GameModel",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attempt3",
                table: "GameModel",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attempt4",
                table: "GameModel",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attempt5",
                table: "GameModel",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
