const std = @import("std");

pub fn main() !void {
    const gpa = std.heap.page_allocator; // Use const instead of var
    var array = std.ArrayList(u64).init(gpa);
    defer array.deinit();

    const start_at = std.time.milliTimestamp();
    for (0..100_000_000) |i| {
        try array.append(@as(u64, i));
    }
    const end_at = std.time.milliTimestamp();

    std.debug.print("{}\n", .{array.items.len});
    std.debug.print("{} seconds\n", .{@as(f64, @floatFromInt(end_at - start_at)) / 1000.0});
    
    // Wait for user input before closing
    std.debug.print("Press Enter to exit...\n", .{});
    _ = try std.io.getStdIn().reader().readByte();
}
