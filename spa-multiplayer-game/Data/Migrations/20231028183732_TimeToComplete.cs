using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace spa_multiplayer_game.Data.Migrations
{
    /// <inheritdoc />
    public partial class TimeToComplete : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "TimeToComplete",
                table: "HighScoreModel",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TimeToComplete",
                table: "HighScoreModel",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");
        }
    }
}
