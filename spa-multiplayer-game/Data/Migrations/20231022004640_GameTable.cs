using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace spa_multiplayer_game.Data.Migrations
{
    /// <inheritdoc />
    public partial class GameTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GameModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PublicId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CorrectWord = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Attempt1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Attempt2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Attempt3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Attempt4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Attempt5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Attempt6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsGameOver = table.Column<bool>(type: "bit", nullable: false),
                    IsWordFound = table.Column<bool>(type: "bit", nullable: false),
                    Score = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameModel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GameModel_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GameModel_UserId",
                table: "GameModel",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GameModel");
        }
    }
}
