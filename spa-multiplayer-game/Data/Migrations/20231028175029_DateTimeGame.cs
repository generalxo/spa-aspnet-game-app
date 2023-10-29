using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace spa_multiplayer_game.Data.Migrations
{
    /// <inheritdoc />
    public partial class DateTimeGame : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Attempts",
                table: "GameModel",
                newName: "BoardState");

            migrationBuilder.AddColumn<DateTime>(
                name: "CompletedAt",
                table: "GameModel",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "GameModel",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompletedAt",
                table: "GameModel");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "GameModel");

            migrationBuilder.RenameColumn(
                name: "BoardState",
                table: "GameModel",
                newName: "Attempts");
        }
    }
}
